<script setup>
import Slider from "@/components/slider/Slider.vue";
import GridCard from "../components/partials/GridCard.vue";
import Banner from "../components/ui_element/Banner.vue";
import Banner5 from "@/assets/images/banner/banner_5.jpg";
</script>
<template>
  <div class="home">
    <div class="container pt-2 pb-16">
      <Slider />
    </div>
    <GridCard />
    <Banner link="/category" :img="Banner5" class="mb-10" />
    <GridCard />
    <Banner link="/category" :img="Banner5" class="mb-10" />
  </div>
</template>

<style scoped></style>
