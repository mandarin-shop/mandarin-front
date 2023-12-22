<script setup>
import GridCard from "@/components/partials/GridCard.vue";
import NotFound from "../components/ui_element/NotFound.vue";
import { ref, onMounted } from "vue";
import Like from "@/assets/images//ui/like.png";
import { useLikeStore } from "@/stores/like";

const likeStore = useLikeStore();

onMounted(() => {
  likeStore.getAll();
});
</script>

<template>
  <main>
    <GridCard
      v-if="likeStore.likeData?.length > 0"
      :data="likeStore.likeData"
    />
    <NotFound
      v-else
      title="Sizga yoqqanini qoʻshing"
      info="Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi"
      :url="Like"
    />
  </main>
</template>

<style lang="scss" scoped></style>
