<template>
  <section class="p-0 max-w-[1304px] px-[32px] mx-auto overflow-hidden">
    <swiper :modules="modules" :slides-per-view="1" :space-between="50" :loop="true" :pagination="{ clickable: true }"
      :navigation="true" :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }" class="rounded-2xl">
      <swiper-slide v-for="item in imagesArr" :key="item.id" class="w-full relative">
        <div class="w-full pt-[calc(100%/3)] overflow-hidden">
          <img :src="item.img" class="top-0 left-0 w-full h-full object-cover absolute rounded-2xl" alt="">
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const modules = [Navigation, Pagination, Autoplay];

const imagesArr = ref([
  {
    id: 1,
    img: 'https://picsum.photos/200/300'
  },
  {
    id: 2,
    img: 'https://picsum.photos/100/200'
  },
  {
    id: 3,
    img: 'https://picsum.photos/100/400'
  },
  {
    id: 4,
    img: 'https://picsum.photos/100/150'
  },
  {
    id: 5,
    img: 'https://picsum.photos/100/120'
  },

]);

</script>

<style>
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
  font-weight: bold;
  color: #000;
  background-color: #f2f4f7;
  opacity: 0.5;
  border-radius: 20px;
  border: 1px solid rgba(54, 54, 64, 0.25);
  outline: none;
  user-select: none;
}


.swiper-button-next::after {
  margin-right: 30px;
  padding: 8px 13px 8px 14px;
}

.swiper-button-prev::after {
  margin-left: 30px;
  padding: 8px 14px 8px 13px;
}

.swiper-pagination-bullet {
  background-color: #ffffff80;
  margin: 0 1px !important;
}

.swiper-pagination-bullet-active {
  background-color: #fff;
}
</style>
