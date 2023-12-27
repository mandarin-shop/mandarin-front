<script setup>
import ProductSidebar from "../components/partials/product-sidebar.vue";
import ProductCard from "../components/card/ProductCard.vue";
import { useRoute } from "vue-router";
import { ref, onMounted, onUpdated, watch } from "vue";
import { useProductStore } from "@/stores/product";
import Loader from "@/components/ui_element/Loader.vue";
import NotFound from "@/components/ui_element/NotFound.vue";
import { useCategoryStore } from "@/stores/category";
const categoryStore = useCategoryStore();

const route = useRoute();
const productStore = useProductStore();
const getAll = () => {
  productStore.getByFilter(route.query?.filter);
};
const selectCategory = (e) => {
  productStore.getByFilter(e.target.value);
};

const query = ref("");
onUpdated(() => {
  query.value = route.query?.filter;
});
watch(query, getAll);

onMounted(() => {
  query.value = route.query?.filter;
});
</script>
<template>
  <div class="category">
    <div class="container flex pt-4">
      <ProductSidebar class="w-[300px]" />
      <div class="content">
        <!-- title -->
        <div class="px-1 mb-3">
          <h1 class="text-2xl font-bold capitalize">
            {{ route.query?.filter }}
          </h1>
          <p class="text-gray-400">
            {{ productStore.products.data?.length || 0 }}ta tovar
          </p>
        </div>

        <!-- filter -->
        <div class="px-1 flex items-center mb-4">
          <span class="text-sm text-gray-400">Saralash</span>
          <select class="outline-none ml-3" @change="selectCategory">
            <option
              v-for="(item, index) in categoryStore.categories.data"
              :key="index + '-select-item'"
              :value="item"
              class="text-capitalize"
            >
              {{ item }}
            </option>
          </select>
        </div>

        <!-- grid -->
        <Loader v-if="productStore.products.loading" />
        <div v-else>
          <div
            v-if="productStore.products.data?.length > 0"
            class="flex flex-wrap"
          >
            <div
              class="w-1/4 p-1"
              v-for="(item, index) in productStore.products.data"
              :key="index + 'product-item'"
            >
              <ProductCard :data="item" />
            </div>
          </div>
          <NotFound
            v-else
            url="/"
            title="Bunday maxsulot mavjud emas"
            info="Boshqa turdagi maxsulotlarni harid qilishingiz"
          />
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
