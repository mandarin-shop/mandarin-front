import { defineStore } from "pinia";

export const useCartStore = defineStore("productCart", {
  state: () => ({
    cartData: [],
    length: 0,
  }),
  actions: {
    // ALL DATA
    getAll() {
      this.cartData = JSON.parse(globalThis?.localStorage?.getItem("product"));
    },

    // ADD TO CART
    addCart(data) {
      let old = JSON.parse(globalThis?.localStorage?.getItem("product"));
      if (this.cartData.length === 0 && old != null) {
        this.cartData = [...old];
      }
      this.cartData.push(data);
      this.saveProduct();
    },

    // DELETE FROM CART
    deleteCart(id) {
      let old = JSON.parse(globalThis?.localStorage?.getItem("product"));
      this.cartData = old?.filter((item) => item.id !== id);
      this.saveProduct();
    },

    // EMPTY CART
    empty() {
      this.cartData = [];
      this.saveProduct();
    },

    // INCREMENT
    counterPlus(id, type) {
      let index = null;
      let selectArr = null;

      let old = JSON.parse(globalThis?.localStorage?.getItem("product"));
      if (this.cartData.length === 0 && old != null) {
        this.cartData = [...old];
      }
      this.cartData.forEach((item, i) => {
        if (item.id === id) {
          selectArr = item;
          index = i;
        }
      });

      if (type === "plus") {
        selectArr.count += 1;
      } else {
        selectArr.count -= 1;
      }

      this.cartData.splice(index, 1, selectArr);
      this.saveProduct();
    },

    // SAVE TO LOCALSTRORAGE
    saveProduct() {
      globalThis?.localStorage?.setItem(
        "product",
        JSON.stringify(this.cartData)
      );
    },
  },
  getters: {
    getProduct(state) {
      const cardDataToObj =
        globalThis?.localStorage?.getItem("product") || "[]";
      state.cartData = JSON.parse(cardDataToObj);
      return state.cartData;
    },
  },
});
