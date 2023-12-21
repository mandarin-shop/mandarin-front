<script setup>
import { ref, onMounted } from "vue";
import Title from "@/components/ui_element/Title.vue";
import ProductCard from "../card/ProductCard.vue";
import { useProductStore } from "../../stores/product";

const productStore = useProductStore();
const props = defineProps({
  title: String,
});

onMounted(() => {
  productStore.getProducts();
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
        v-for="(item, index) in productStore.products.data"
        :key="index"
      >
        <ProductCard :data="item" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
