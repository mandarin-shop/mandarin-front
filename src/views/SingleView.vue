<script setup>
import SingleProductSlider from "@/components/slider/SingleProductSlider.vue";
import ProductExtraInfo from "@/components/partials/ProductExtraInfo.vue";
</script>

<template>
  <main class="single-product">
    <div class="container py-4 flex">
      <SingleProductSlider class="w-[40%]" />
      <div class="w-[60%] border border-red-500"></div>
    </div>
    <ProductExtraInfo />
  </main>
</template>

<style scoped></style>
