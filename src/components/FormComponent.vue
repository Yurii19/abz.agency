<template>
    <div class="wrap">
      <span class="header">Working with POST request</span>
     
  </div>
 
  </template>
  <!-- non-breaking hyphen &#8209; -->
  <script lang="ts" setup>
  import { onMounted, ref, watch } from 'vue';
  import UserCard from '../components/UserCard.vue';
  import { useAppStore } from '../store';
  import ButtonComponent from '../components/ButtonComponent.vue';
  
  const store = useAppStore();
  
  onMounted(() => {
    store.upadateUsers(4);
  });
  // function getusers(){
  //     console.log()
  // }
  </script>
  
  <style lang="scss" scoped>
  .wrap {
    background-color:  #F8F8F8;
    text-align: center;
    .users-container {
      border: 1px dotted red;
      display: flex;
      flex-wrap:  wrap;
      justify-content: space-around;
    }
  }
  .header {
    font-size: 40px;
    display: block;
    margin-bottom: 20px;
  }
  .user {
    display: inline-block;
    margin-bottom: 20px;
  }
  </style>
  