<script setup>
import Slider from "@/components/slider/Slider.vue";
import GridCard from "@/components/partials/GridCard.vue";
import Banner from "@/components/ui_element/Banner.vue";
import Banner5 from "@/assets/images/banner/banner_5.jpg";
import { useProductStore } from "@/stores/product";
import { ref, onMounted } from "vue";

const productStore = useProductStore();

onMounted(() => {
  productStore.getProducts();
});
</script>
<template>
  <div class="home">
    <div class="container pt-2 pb-16">
      <Slider />
    </div>
    <GridCard title="Katta sotuvlar" :data="productStore.products.data" />
    <Banner link="/category" :img="Banner5" class="mb-10" />
    <GridCard title="Muddatli to'lov" :data="productStore.products.data" />
    <Banner link="/category" :img="Banner5" class="mb-10" />
  </div>
</template>

<style scoped></style>
