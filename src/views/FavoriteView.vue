<script setup>
import GridCard from "@/components/partials/GridCard.vue";
import NotFound from "../components/ui_element/NotFound.vue";
import { ref } from "vue";
import Like from "@/assets/images//ui/like.png";

const isFound = ref(true);
</script>

<template>
  <main>
    <GridCard v-if="isFound" />
    <NotFound
      v-else
      title="Sizga yoqqanini qoʻshing"
      info="Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi"
      :url="Like"
    />
  </main>
</template>

<style lang="scss" scoped></style>
