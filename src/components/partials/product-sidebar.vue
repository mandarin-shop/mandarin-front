<script setup></script>

<template>
  <aside class="h-auto bg-purple px-4 py-6 flex flex-col w-[30%]">
    <h1 class="text-lg mb-4 pl-[45px]">Категории</h1>
    <div class="text-gray-700 text-base text-left mx-auto">
      <ol class="list-none cursor-pointer">
        <div
          class="mt-[5px] hover:bg-slate-200 rounded-md active:bg-slate-100 p-[5px]"
        >
          <li>Все категории</li>
        </div>
        <div
          class="mt-[5px] hover:bg-slate-200 rounded-md active:bg-slate-100 p-[5px]"
        >
          <li>Электроника</li>
        </div>
        <div
          class="mt-[5px] hover:bg-slate-200 rounded-md active:bg-slate-100 p-[5px]"
        >
          <li>Аксессуары для электроники</li>
        </div>
        <div
          class="mt-[5px] hover:bg-slate-200 rounded-md active:bg-slate-100 p-[5px]"
        >
          <li>Компьютерная техника</li>
        </div>
        <div
          class="mt-[5px] hover:bg-slate-200 rounded-md active:bg-slate-100 p-[5px]"
        >
          <li>Наушники и аудиотехника</li>
        </div>
        <div
          class="mt-[5px] hover:bg-slate-200 rounded-md active:bg-slate-100 p-[5px]"
        >
          <li>Смартфоны и телефоны</li>
        </div>
      </ol>
    </div>
    <h1 class="text-lg mt-[30px] pl-[45px] font-semibold">Цена</h1>
    <p class="text-sm pl-[45px]">Очистить</p>
    <div class="mt-[20px]">
      <div class="flex px-[45px] gap-2">
        <input
          type="text"
          class="border-2 border-gray-300 p-[5px] focus:border-black focus:outline-none w-[120px] rounded-md"
        />
        <input
          type="text"
          class="border-2 border-gray-300 focus:border-black focus:outline-none w-[120px] rounded-md"
        />
      </div>
      <div class="pl-[70px] mt-[10px]">
        <input type="range" name="" id="" class="w-[65%]" />
      </div>
    </div>
    <h1 class="text-lg mt-[30px] pl-[45px] font-semibold">Бренд</h1>
    <p class="text-sm pl-[45px]">Очистить</p>
    <div class="mt-[30px] flex flex-col gap-5 pl-[45px]">
      <div class="flex flex-row gap-3">
        <input type="checkbox" name="" id="FPB" />
        <label for="FPB">FPB</label>
      </div>

      <div class="flex flex-row gap-3">
        <input type="checkbox" name="" id="Nothing" />
        <label for="Nothing">Nothing</label>
      </div>

      <div class="flex flex-row gap-3">
        <input type="checkbox" name="" id="SSMART" />
        <label for="SSMART">SSMART</label>
      </div>

      <div class="flex flex-row gap-3">
        <input type="checkbox" name="" id="Acer" />
        <label for="Acer">Acer</label>
      </div>
      <p class="text-xs text-gray-500 cursor-pointer">Еще 61</p>
    </div>
  </aside>
</template>

<style scoped>
.router-link-active {
  background-color: #fff;
  color: black;
}
</style>
