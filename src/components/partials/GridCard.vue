<script setup>
import Title from "@/components/ui_element/Title.vue";
import ProductCard from "../card/ProductCard.vue";

const props = defineProps({
  title: String,
  data: Array,
});
</script>

<template>
  <section class="mb-10">
    <div class="container mb-4" v-if="props.title">
      <Title link="/category" :text="props.title" />
    </div>
    <div class="container flex flex-wrap justify-start gap-4">
      <div
        class="card w-[19%] mt-2"
        v-for="(item, index) in props.data"
        :key="index + '-sddasdfs'"
      >
        <ProductCard :data="item" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
