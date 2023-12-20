<script setup>
import ProductSidebar from "../components/partials/product-sidebar.vue";
import ProductCard from "../components/card/ProductCard.vue";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
</script>
<template>
  <div class="category">
    <div class="container flex pt-4">
      <ProductSidebar class="w-[300px]" />
      <div class="content">
        <!-- title -->
        <div class="px-1 mb-3">
          <h1 class="text-2xl font-bold">Maishiy texnika</h1>
          <p class="text-gray-400">10,409 ta tovar</p>
        </div>

        <!-- filter -->
        <div class="px-1 flex items-center mb-4">
          <span class="text-sm text-gray-400">Saralash</span>
          <select class="outline-none ml-3">
            <option value="ommabop" class="text-capitalize" selected>
              Ommabop
            </option>
            <option value="arzonroq" class="text-capitalize">arzonroq</option>
            <option value="qimmatroq" class="text-capitalize">qimmatroq</option>
            <option value="top_reyting" class="text-capitalize">
              reyting yuqori
            </option>
            <option value="popular" class="text-capitalize">
              ko'p buyurtiriladigan
            </option>
            <option value="yangi" class="text-capitalize">yangi</option>
          </select>
        </div>

        <!-- grid -->
        <div class="flex flex-wrap">
          <div class="w-1/4 p-1" v-for="(item, index) in arr" :key="index">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: calc(100% - 300px);
}
</style>
