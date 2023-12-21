<script setup></script>

<template>
  <div class="about1">
    <h5>Sizning buyurtmangiz</h5>
    <div style="display: flex; justify-content: space-between">
      <h6>Mahsulotar(2):</h6>
      <h6>8 654 000 so'm</h6>
    </div>
    <a class="about-a" href="">Yetkazib berish 12 dekabr (ertaga)</a>
    <div style="display: flex; justify-content: space-between">
      <h6>Jami:</h6>
      <h6>4 839 000 so'm</h6>
    </div>
    <span class="about1-span">Siz tejaysiz: 3 815 000 so'm</span>
    <button class="about1-button">To'lovga o'ting</button>
  </div>
</template>

<style lang="scss" scoped>
.about1 {
  width: 30%;
  height: 40vh;
  background-color: rgb(239, 235, 226);
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
}
.about-a {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  border: 2px solid blue;
  color: blue;
  text-decoration: none;
}
.about1-span {
  display: flex;
  font-size: 15px;
  color: rgb(132, 195, 7);
  padding: 0px 50px;
  justify-content: center;
}
.about1-button {
  background-color: blue;
  color: white;
  //   text-align: center;
  //   align-items: center;
  //   border-radius: 15px;
  //   height: 50px;
  //   width: 100%;
  border-radius: 12px;
  column-gap: 8px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  height: 44px;
  letter-spacing: 0.004em;
  line-height: 20px;
  padding: 0 14px;
  text-align: center;
}
</style>
