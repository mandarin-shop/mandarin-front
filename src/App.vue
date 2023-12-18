<script setup>
import Footer from "@/components/partials/Footer.vue";
import Header from "@/components/partials/Header.vue";
import productExstraInfo from "@/components/partials/ProductExtraInfo.vue";
</script>

<template>
  <Header />
  <main class="main">
    <RouterView />
    <productExstraInfo />
  </main>
  <Footer />
</template>

<style scoped>
.main {
  min-height: 50vh;
}
</style>
