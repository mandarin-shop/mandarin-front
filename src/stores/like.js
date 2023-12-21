import { defineStore } from "pinia";

export const useLikeStore = defineStore("like", {
  state: () => ({
    favorites: [],
  }),
  actions: {
    likeProduct() {
      this.favorites = JSON.parse(localStorage.getItem("like") || "[]");
    },

    addLike(data) {
      const likes = JSON.parse(localStorage.getItem("like") || "[]");
      likes.push(data);
      this.favorites = likes;
      localStorage.setItem("like", JSON.stringify(likes));
    },

    deleteLike(id) {
      const likes = JSON.parse(localStorage.getItem("like") || "[]");
      const newLikes = likes.filter((item) => item?.id !== id);
      this.favorites = newLikes;
      localStorage.setItem("like", JSON.stringify(newLikes));
    },
  },
  getters: {},
});
