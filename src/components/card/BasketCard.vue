<script setup>
  import { ref } from 'vue';
  const count = ref(1)
  function increment(){
    count.value +=1
  }
  function decrement(){
    if(count.value == 1){
      return
    }
    count.value -=1
  }

</script>
<template>
      <div class="w-7/12 border border-black p-3">
        <div class="flex justify-between items-center pb-3">
          <div class="flex">
            <input type="checkbox" name="" id="">
            <h5 class="ml-2 text-base">Hammasini yechish</h5>
          </div>
          <div class="flex items-center">
            <p class="text-xs text-slate-500">Yetkazib berishning eng yaqin sanasi:</p>
            <button class="border border-violet-600 text-violet-600 ml-1 rounded text-sm p-0.5 ">M12 14 (Erta)</button>
          </div>
        </div>
        <hr>
        <div class="mt-3 flex">
        <input type="checkbox" name="" id="">
          <img class="w-20 ml-3" src="../../assets/images/photo_2023-12-11_15-00-16.jpg" alt="">
          <div>
            <div class="flex justify-between">
              <h2 class="ml-10 text-base">Televizor Artel A43KF5500 Android, qora</h2>
              <button class="font-base text-gray-500 hover:text-gray-900 outline-none>"><i class='bx bxs-trash'></i> Yoʻq qilish</button>
            </div>
            <div class="flex mt-8 ml-10 ">
              <div class="flex items-center">
                <p class=" text-sm text-slate-500">Sotuvchi:</p>
                <h2 class="ml-1 text-base">Artel Brand Shop</h2>
              </div>
              <div class="w-20 ml-52 flex items-center border border-gray-400 pl-2 pr-2 justify-between rounded"> 
                <button @click="decrement()" class="font-base">-</button>
                <h2>{{ count }}</h2>
                <button @click="increment()">+</button>
              </div>
              <h2 class="ml-10 text-lg">2 799 000 so'm</h2>
            </div>
            <div class="flex justify-end">
              <p class="line-through ml-10 text-sm">3 380 000 so'm</p>
            </div>
          </div>
        </div>
      </div>
</template>
<style>
</style>
