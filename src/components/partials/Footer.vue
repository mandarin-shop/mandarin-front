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
          <i class='bx bxl-play-store '></i> <span class="text-sm">Google Play</span>
        </div>
      </div>
    </div>

    <div class="text-right px-32   pt-5  ">
      <header class="header">Uzum ijtimoiy tarmoqlarda</header>
      <div class="pt-2">
        <i class='bx bxl-instagram'></i>
        <i class='bx bxl-telegram'></i>
        <i class='bx bxl-youtube'></i>
        <i class='bx bxl-facebook-square'></i>
      </div>
      
    <div class="hr-footer"></div>
  
    </div>
  </footer>
</template>

<style scoped>

.hr-footer {
  margin-top: 65px;
  border:1px solid gray
}
</style>
