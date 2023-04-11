<script setup lang="ts">
import HomePage from './layouts/HomePage.vue';
import LoginPage from './layouts/LoginPage.vue';
</script>

<template>
  <div class="main-container">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.main-container {
  max-width: 2560px;
  /* border: 1px dotted red; */
  display: flex;
  margin: 0 auto;
  padding: 0;
  background-image: url('./assets/pexels-alexandr-podvalny-1227513.jpeg');
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('./assets/pexels-alexandr-podvalny-1227513.jpeg');
  height: 100%;
  /* background-size: cover; */
  background-position: 25% 75%;
  /* filter: brightness(60%); */
  /* background-position: center; */
}
</style>
