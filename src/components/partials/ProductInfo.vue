<script setup>
  import {ref} from "vue"
      const num = ref(1);
      function Decrement(){
        num.value--
      }
      function Increment(){
        num.value++
      }
  
</script>
<template>
<div class="ml-5 mr-5">
    <h1 class="text-2xl">Kreativ yumshoq o'yinchoq yostiq , ichida olinadigan mini-o'yinchoqlar bilan</h1>
    <div>
        <p class="mt-2">
          sotuvchi : KN-Toys&Gifts
        </p>
        <p class="mt-2">
          Yetkazib berish: 1 kun, bepul
        </p>
        <hr>
        <div>
          <p>Rang : </p>
          <div class="flex w-[100px] bg-cyan-600 mt-5">
            <img class="p-2 bg-white border" src="/src/assets/images/Screenshot 2023-12-13 at 08.38.05.png" alt="">
            <img class="ml-2 p-2 border" src="/src/assets/images/Screenshot 2023-12-13 at 08.38.15.png" alt="">
          </div>
        </div>

        <p class="mt-5">Miqdor :</p>
        <div class="border mt-3">
          <button class="p-3" :disabled="num<=1" @click="Decrement()">-</button>
          <span class="p-3">{{ num }}</span>
          <button class="p-3" @click="Increment()">+</button>
        </div>

        <p class="mt-3">Narx : </p>
        <div class="flex">
          <h1 class="text-black text-xl">239 000</h1>
          <h5 class="ml-5 text-gray-500"><s>600 000</s></h5>
          <h5 class="bg-purple-500 rounded-md text-white ml-5 p-1">Katta sotuvlar</h5>
        </div>
        <div class="flex border rounded-lg mt-3 mr-40">
          <h1 class="p-3"><span class=" text-black bg-yellow-300">Oyiga 29 078 so'mdan</span>muddatli to'lov</h1>
        </div>
        <div class="flex justify-center items-center mt-5">
          <button class="text-2xl text-white bg-purple-600 pl-10 pr-10 pt-3 pb-3 rounded-xl w-[30%]">Savatga qo'shish</button>
          <button class="text-2xl text-purple-600 bg-white pl-10 pr-10 pt-3 pb-3 rounded-xl border-purple-600 border ml-3 w-[30%]">Tugmani bir bosishda xarid qilish </button>
        </div>
        <p class="bg-purple bg-yellow-100 text-black">
          Bu haftada 22 kishi sotib oldi
        </p>
        <p class="mt-20">
          Mahsulot haqida qisqacha :
        </p>
        <li>Kreativ yumshoq o'yinchoq - yostiq</li>
        <li>Ichkarida mini o'yinchoqlar bilan</li>
        <li>Shaffof oyna bilan</li>
        <li>Orqa tomonda fermuar bor</li>
        <li>Mini o'yinchoqlar olib tashlanadi</li>
        <li>Xavfsiz materiallardan tayyorlangan</li>
        <li>O'lchamlari: 58 sm x 40 sm</li>
        <li>Mahsulotning batafsil tavsifini ko'rish uchun "Batafsil" tugmasini bosing</li>
    </div>
</div>
</template>