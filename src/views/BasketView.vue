<script setup>
import Title from "@/components/ui_element/Title.vue";
import BasketCard from "@/components/card/BasketCard.vue";
</script>

<template>
  <main class="basket">
    <div class="container py-10">
      <Title text="Savatingiz, 2 mahsulot" />
      <div class="flex items-start mt-6">
        <div class="w-3/4">
          <div class="border border-gray-300 p-3">
            <BasketCard />
            <BasketCard />
            <BasketCard />
          </div>
        </div>
        <div class="w-1/4"></div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
