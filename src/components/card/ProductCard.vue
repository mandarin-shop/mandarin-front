<script setup>
import { ref } from "vue";
import { useLikeStore } from "../../stores/like";

const likeStore = useLikeStore();
const props = defineProps({
  data: Object,
});
const isLike = ref(false);
</script>

<template>
  <!-- <pre>{{ props.data }}</pre> -->
  <div
    class="w-full relative justify-around hover:shadow-lg shadow-gray-500 duration-500 ease-in-out cursor-pointer rounded-lg"
  >
    <!-- like -->
    <div class="absolute top-3 right-4" @click="isLike = !isLike">
      <i v-if="isLike" class="bx bxs-heart text-2xl text-[#7000FF]"></i>
      <i v-else class="bx bx-heart text-2xl text-gray-500"></i>
    </div>
    <!-- img -->
    <img
      class="rounded-lg w-full h-[250px] object-cover border border-gray-300"
      :src="props.data?.thumbnail"
      alt="product-img"
    />
    <!-- info -->
    <div class="mt-[10px] p-[10px]">
      <h2>{{ props.data?.title }}</h2>
      <div class="flex mb-[10px]">
        <box-icon class="w-[15px]" name="star"></box-icon>
        <span class="text-[15px] text-gray-500 pl-[5px]"
          >{{ props.data?.rating }} (273 оценки)</span
        >
      </div>
      <span class="bg-yellow-300 rounded-md py-[1px] px-[2px]"
        >9 611 сум/мес</span
      >
      <span class="block text-[12px] text-gray-500 mt-[10px]"
        ><s>{{ +props.data?.price + 1000 }} сум</s></span
      >

      <div class="flex justify-between">
        <div>
          <h4>{{ props.data?.price }} сум</h4>
        </div>

        <div
          class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 duration-200"
        >
          <i class="bx bx-shopping-bag text-lg text-gray-800"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
