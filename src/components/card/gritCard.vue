<template>
  <!-- <h1>Katta sotuvlar ></h1> -->
  <section class="container flex flex-wrap justify-between gap-1 mb-10">
    <div
      class="group card w-[49%] md:w-[24%] lg:w-[19%] rounded-sm p-1 sm:mt-2 mt-3 md:mt-5 lg:mt-9 hover:shadow-lg duration-200"
      v-for="(item, index) in product"
      :key="index"
    >
      <div
        class="cardImg relative w-full h-[150px] md:h-[180px] lg:h-[250px] bg-[#EFEFEF] p-2"
      >
        <img
          class="w-full h-full object-contain scale-90 group-hover:scale-95 duration-300"
          :src="item?.image"
          alt="img"
          srcset=""
        />
        <svg-icon
          class="absolute top-1 right-1 w-[16px] md:w-[18px] lg:w-[20px]"
          type="mdi"
          :path="mdiHeartOutline"
        ></svg-icon>
      </div>
      <div
        class="flex flex-col justify-between h-[120px] md:h-[140px] lg:h-[160px]"
      >
        <div class="cardTopInfo">
          <p
            class="productTitle leading-tight text-[10px] md:text-[11px] md:max-h-[30px] lg:text-sm lg:max-h-[40px] overflow-hidden mt-2"
          >
            {{ item?.title }}
          </p>
          <div class="status">
            <div class="rate flex items-center gap-1">
              <svg-icon
                class="text-yellow-500 w-[12px] md:w-[15px] lg:w-[17px]"
                type="mdi"
                :path="mdiStar"
              ></svg-icon>
              <p class="text-[8px] md:text-[10px] lg:text-[12px]">
                {{ item.rating.rate }} ({{ item.rating.count }} baho)
              </p>
            </div>

            <p
              class="monthlyPay inline-block bg-[#FFFF00] px-2 py-[2px] rounded-md text-[8px] md:text-[10px] lg:text-[12px] font-normal my-auto"
            >
              {{ parseInt((item.price / 12) * 1000) }} so'm/oyiga
            </p>
          </div>
        </div>

        <div
          class="cardFooterInfo item-end flex items-center justify-between px-2"
        >
          <div class="price">
            <p
              class="line-through text-[10px] md:text-[12px] lg:text-[15px] text-purple-300"
            >
              {{ item.price * 1000 * 2 }}
            </p>
            <p class="text-[12px] md:text-[15px] lg:text-[17px] font-medium">
              {{ item.price * 1000 }}
            </p>
          </div>
          <svg-icon
            class="border border-1 border-black rounded-[50%] w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] p-1"
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
