<script setup>
import { ref } from "vue";
const count = ref(1);
function increment() {
  count.value += 1;
}
function decrement() {
  if (count.value == 1) {
    return;
  }
  count.value -= 1;
}
</script>
<template>
  <div class="py-4 border-t border-gray-300 flex items-center">
    <input type="checkbox" class="w-5 h-5 mr-10" />
    <div class="content flex items-start">
      <img
        src="../../assets/images/ui/product1.jpg"
        alt="cart-img"
        class="w-[100px]"
      />
      <div class="info pl-10">
        <p class="w-full flex items-center justify-between mb-4">
          <router-link to="/product/1" class="mr-2 text-gray-800"
            >Radar detektori Neoline X-COP Neoline X-COP 9700S, zaryadlovchi
            sovg'a</router-link
          >
          <span class="flex items-center">
            <i class="bx bxs-trash text-2xl text-gray-500 mr-2"></i>
            <span class="text-sm text-gray-400">Yo'q qilish</span>
          </span>
        </p>
        <div class="flex justify-between items-start">
          <p class="text-sm">
            <span class="text-gray-400 mr-2">Sotuvchi:</span>
            <router-link to="#" class="text-gray-800"
              >Radius Mobile</router-link
            >
          </p>
          <div class="flex items-start">
            <!-- counter -->
            <div
              class="flex mr-10 border border-gray-300 rounded-md overflow-hidden"
            >
              <button @click="increment" class="w-11 h-10 text-2xl text-black">
                +
              </button>
              <div
                class="w-11 h-10 text-xl text-black flex items-center justify-center"
              >
                {{ count }}
              </div>
              <button @click="decrement" class="w-11 h-10 text-2xl text-black">
                -
              </button>
            </div>

            <!-- sum -->
            <div class="text-end">
              <p class="text-lg text-gray-900 font-semibold">2 990 000 so'm</p>
              <del class="text-gray-400 text-sm">4 990 000 so'm</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content {
  width: calc(100% - 20px - 40px);
}
.info {
  width: calc(100% - 100px);
}
</style>
