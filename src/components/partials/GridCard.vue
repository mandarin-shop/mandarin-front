<script setup>
import { ref } from "vue";
import Title from "@/components/ui_element/Title.vue";
import ProductCard from "../card/ProductCard.vue";

const props = defineProps({
  title: String,
});

const product = ref();
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    (product.value = json), console.log(json);
  });
</script>

<template>
  <section class="mb-10">
    <div class="container mb-4" v-if="props.title">
      <Title link="/products" :text="props.title" />
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
