<script setup></script>
<template>
  <footer class="footer">
    <div class="flex justify-between  px-32">
      <div>
          <header class="header">Biz haqimizda</header>
          <div class="mt-3">
            <router-link to="#" class="block header-text">Topshirish punktlari</router-link>
            <router-link to="#" class=" header-text">Vakansiyalar</router-link>
          </div>
      </div>
      <div>
            
        <header class="header">Foydalanuvchilarga</header>
        <div class="mt-3">
          <router-link to="#" class="block  header-text">Biz bilan bog'lanish</router-link>
          <router-link to="#"  class=" header-text">Savol-Javob</router-link>
        </div>
      </div>
      <div>
            
        <header class="header">Tadbirkorlarga</header>
        <div class="mt-3">
          <router-link to="#" class="block header-text">Uzumda soting</router-link>
          <router-link to="#"  class=" header-text">Sotuvchi kabinetiga kirish</router-link></div>
      </div>
      <div >
            
        <header class="header">Ilovani yuklab olish</header>
        <div class="mt-4 justify-center flex  items-center ">
          <i class='bx bxl-apple '></i> <span class="text-sm pr-5">AppStore</span>
          <i class='bx bxl-play-store  text-blue-500'></i> <span class="text-sm">Google Play</span>
        </div>
      </div>
    </div>

    <div class="text-right px-36  pt-5">
      <header class="header">Mandarin ijtimoiy tarmoqlarda</header>
      <div class="pt-2">
        <i class='bx bx1 bxl-instagram-alt text-pink-500 mx-1 '></i>
        <i class='bx bx1 bxl-telegram mx-1'></i>
        <i class='bx bx1 bxl-youtube text-red-700 mx-2'></i>
        <i class='bx bx1 bxl-facebook-square text-blue-900 mx-2'></i>
      </div>
      
  
    </div>
  </footer>
</template>

<style scoped>

.bx {
  font-size: 30px;
}
.bx1 {
  font-size: 37px;
}

.bxl-telegram {
  color: rgb(94, 167, 251);
}

</style>


