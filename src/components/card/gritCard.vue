<template>
  <!-- <h1>Katta sotuvlar ></h1> -->
  <section class="container flex flex-wrap justify-around gap-1 mb-10">
    <div
      class="card w-[19%] border rounded-sm h-[380px] p-1 mt-2"
      v-for="(item, index) in product"
      :key="index"
    >
      <div class="cardImg relative w-full h-[200px] bg-[#EFEFEF]">
        <img
          class="w-full h-full object-contain"
          :src="item?.image"
          alt="img"
          srcset=""
        />
        <svg-icon class="absolute top-1 right-1" type="mdi" :path="mdiHeartOutline"></svg-icon>
      </div>
      <div class="cardInfos  flex-row  g-4 h-[180px]">
        <div class="cardTopInfo ">
          <p class="productTitle leading-tight text-md">{{ item?.title }}</p>
          <div class="status gap-2 mt-2">
            <div class="rate flex gap-1 align-item-center">
              <svg-icon
                class="text-yellow-500"
                size="20"
                type="mdi"
                :path="mdiStar"
              ></svg-icon>
              <p class="text-sm">{{ item.rating.rate }} ({{ item.rating.count }} baho)</p>
            </div>
            <p
              class="monthlyPay inline-block bg-yellow-300 px-4 py-1 rounded-md text-[13px] font-normal my-auto"
            >
              {{ parseInt((item.price / 12) * 1000) }} so'm/oyiga
            </p>
          </div>
        </div>
        <div class="cardFooterInfo flex justify-between mt-3 px-2">
          <div class="price  w-[200]">
            <p class="line-through">{{ item.price * 1000 * 2 }}</p>
            <p>{{ item.price * 1000 }}</p>
          </div>
          <svg-icon
            class="border-2 border-black rounded-[50%] p-1"
            size="35"
            type="mdi"
            :path="mdiCartPlus"
          ></svg-icon>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiStar } from "@mdi/js";
import { mdiCartPlus } from "@mdi/js";
import { mdiHeartOutline } from "@mdi/js";
import { ref } from "vue";

const product = ref();
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    (product.value = json), console.log(json);
  });
</script>

<style lang="scss" scoped></style>
