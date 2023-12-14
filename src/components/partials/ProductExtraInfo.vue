<script setup>

import {UseProduct} from "../../composables/Product"
import ProductDesc from "../card/ProductDesc.vue";
import ProductCommentCard from "../card/ProductCommentCard.vue";

const {boolean1, boolean2, onComm, onDesc} = UseProduct()



</script>


<template>
  <section class="header mb-6 ">
    <div class="div-card p-5 mt-6 xl:pl-80  lg:pl-40     ">
      <div class="flex  gap-6  ">
        <h3 class="font-medium title" @click="onDesc">Mahsulot tavsifi</h3>
        <h3 class="font-medium title" @click="onComm">Sharhlar</h3>
      </div>
    </div>
      <div class="px-5 " v-if="boolean1">
        <ProductDesc />
      </div>
      <div v-if="boolean2" class="p-5 pt-8  xl:pl-80  lg:pl-40 md:pl- ">
        <h2 class="text-2xl text-gray-800 title-card pb-5  w-[70%]">Hamma sharhlar</h2>
        <ProductCommentCard class="w-[70%]"/>
      </div>

  </section>
</template>

<style scoped>
.div-card {
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}

.title-card {
  border-bottom: 1px solid gray;
}

.title:hover {
  color: purple;
}

.title {
  position: relative;
  display: inline-block;
}

.title {
  position: relative;
  display: inline-block;
}


.title::after {
  content: "";
  position: absolute;
  bottom: -2px; /* Chiziqning balandligi */
  left: 0;
  width: 0;
  height: 2px; /* Chiziqning uzunligi */
  background-color: purple; /* Chiziqning rangi */
  transition: width 0.5s ease; /* Animatsiya */
}

.title.active::after {
  width: 100%; /* Bosganda chiziqning uzunligi */

}


</style>
