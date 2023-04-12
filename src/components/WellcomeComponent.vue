<template>
  <div class="wrap">
    <div class="container">
      <span class="header">Test assignment for front-end developer</span>
      <br />
      <span class="content"
        >What defines a good front-end developer is one that has skilled
        knowledge of HTML , CSS , JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind . They should also be excited to learn , as the world of
        Front&#8209;End Development keeps evolving .
      </span>
      <br />
      <div class="button-container">
        <ButtonComponent :text="'Sign up'" />
      </div>
    </div>
  </div>
</template>
<!-- non-breaking hyphen &#8209; -->
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import ButtonComponent from '../components/ButtonComponent.vue';
</script>

<style lang="scss" scoped>
.wrap {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('../assets/pexels-alexandr-podvalny-1227513.jpeg');
  background-position: 25% 75%;
  // border: 1px solid red;
  //   display: flex;
  //   flex: 1;
  min-height: 95vh;
}
.container {
  color: white;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  // margin-top: 15%;
  span {
    // border: 1px dotted red;
  }
  .header {
    font-size: 40px;
    display: inline-block;
    margin-bottom: 20px;
  }
  .content {
    line-height: 26px;
    font-size: 16px;
    // word-break: keep-all;
  }
}
.button-container {
  margin-top: 30px;
}
</style>
