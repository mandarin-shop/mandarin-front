<script setup>
import { ref } from "vue";
import Title from "@/components/ui_element/Title.vue";
import ProductCard from "../card/ProductCard.vue";

const product = ref();
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    (product.value = json), console.log(json);
  });
</script>

<template>
  <!-- <h1>Katta sotuvlar ></h1> -->
  <section class="mb-10">
    <div class="container mb-4">
      <Title link="/products" text="Katta sotuvlar" />
    </div>
    <div class="container flex flex-wrap justify-around gap-1">
      <div
        class="card w-[19%] mt-2"
        v-for="(item, index) in product?.slice(0, 10)"
        :key="index"
      >
        <ProductCard />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
