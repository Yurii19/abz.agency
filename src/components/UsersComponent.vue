<template>
  <div class="wrap">
    <span class="header">Working with GET request</span>
    <span class="user" v-for="user in store.getUsers" :key="user">
      <UserCard :user="user" />
    </span>
    <!-- <button @click=""></button> -->
  </div>
</template>
<!-- non-breaking hyphen &#8209; -->
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import UserCard from '../components/UserCard.vue';
import { useAppStore } from '../store';

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
  background-color: white;
  text-align: center;
}
.header {
  font-size: 40px;
  display: block;
  margin-bottom: 20px;
}
.user {
  display: inline-block;
}
</style>
