import { defineStore } from "pinia";
import axios from "../api/axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: {
      loading: false,
      data: null,
      error: null,
    },
  }),
  actions: {
    async getProducts() {
      this.products.loading = true;
      try {
        const res = await axios.get("/products");
        this.products.data = res.data.products;
      } catch (error) {
        this.products.error = error;
      } finally {
        this.products.loading = false;
      }
    },

    async getByFilter(filter) {
      this.products.loading = true;
      try {
        const res = await axios.get(`/products/category/${filter}`);
        this.products.data = res.data.products;
      } catch (error) {
        this.products.error = error;
      } finally {
        this.products.loading = false;
      }
    },

    async getTop(word) {
      try {
        const res = await axios.get(`/products/category/${word}`);
        console.log(res.data.products);
        return res.data.products;
      } catch (error) {
        this.products.error = error;
      }
    },
  },
});
