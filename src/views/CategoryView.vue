<script setup>
import ProductSidebar from "../components/partials/product-sidebar.vue";
</script>
<template>
  <div class="category">
    <div class="container flex pt-4">
      <ProductSidebar class="w-[300px]" />
      <div class="content bg-gray-200"></div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: calc(100% - 300px);
}
</style>
