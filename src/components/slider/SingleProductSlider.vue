<script setup>
import { ref } from "vue";

const images = ref([
  "https://images.uzum.uz/clo4nqlenntcj8aah5h0/original.jpg",
  "https://images.uzum.uz/clo4not6sfhsc0ung4eg/original.jpg",
  "https://images.uzum.uz/clo4nq56sfhsc0ung4fg/original.jpg",
  "https://images.uzum.uz/clpchfdenntcj8aapo7g/original.jpg",
  "https://images.uzum.uz/clpdea9s99oopol15afg/original.jpg",
  "https://images.uzum.uz/clpdea9s99oopol15ag0/original.jpg",
  "https://images.uzum.uz/clpdea9s99oopol15af0/original.jpg",
]);

const currentIndex = ref(0);
const img = ref(images.value[0]);

function selectImg(i) {
  currentIndex.value = i;
  img.value = images.value[i];
}
function changedByArrow(str) {
  if (str == "next") {
    currentIndex.value += 1;
  } else {
    currentIndex.value -= 1;
  }
  img.value = images.value[Math.abs(currentIndex.value) % images.value.length];
}
</script>

<template>
  <section class="flex">
    <transition-group
      name="fade"
      tag="div"
      class="sidebar flex flex-col gap-2 max-h-[430px] overflow-y-scroll sticky"
    >
      <div v-for="(image, index) in images" :key="index">
        <img
          @click="selectImg(index)"
          class="w-full h-[100px]"
          :src="image"
          :class="index == currentIndex ? 'border border-red-500' : ''"
        />
      </div>
    </transition-group>
    <transition-group name="fade" tag="div">
      <div class="flex h-[430px]" v-for="i in [currentIndex]" :key="i">
        <a class="prev" @click="changedByArrow('prev')" href="#">&#10094; </a>
        <img class="w-full h-full" :src="img" />
        <a class="next" @click="changedByArrow('next')" href="#">&#10095; </a>
      </div>
    </transition-group>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  opacity: 1;
}
.prev,
.next {
  display: flex;
  align-items: center;
  cursor: pointer;
  top: 40%;
  width: auto;
  padding: 16px;
  color: blue;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 4px 0px 0px 4px;
  text-decoration: none;
  user-select: none;
}
.sidebar::-webkit-scrollbar {
  display: none;
}
</style>
