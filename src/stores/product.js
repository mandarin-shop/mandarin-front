import { defineStore } from "pinia";
import axios from "../api/axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: {
      loading: false,
      data: null,
      error: null,
      total: 0,
    },
  }),
  actions: {
    async getProducts(limit, skip) {
      this.products.loading = true;
      try {
        let url = "";
        if (limit) {
          url = `/products?limit=${limit}&skip=${skip}`;
        } else {
          url = "/products";
        }
        const res = await axios.get(url);
        this.products.data = res.data.products;
        this.products.total = res.data.total;
      } catch (error) {
        this.products.error = error;
      } finally {
        this.products.loading = false;
      }
    },

    async getByFilter(filter, limit, skip) {
      this.products.loading = true;
      try {
        const res = await axios.get(
          `/products/category/${filter}?limit=${limit}&skip=${skip}`
        );
        this.products.data = res.data.products;
        console.log(res.data);
        this.products.total = res.data.total;
      } catch (error) {
        this.products.error = error;
      } finally {
        this.products.loading = false;
      }
    },

    async getTop(word) {
      try {
        const res = await axios.get(`/products/category/${word}`);
        return res.data.products;
      } catch (error) {
        this.products.error = error;
      }
    },
  },
});
