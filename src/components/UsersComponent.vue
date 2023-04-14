<template>
  <div class="wrap py-16 px-16">
    <span class="header mt-16">Working with GET request</span>
    <div class="users-container">
      <span class="user mx-6 my-6" v-for="user in users" :key="user.id">
        <UserCard :user="user" />
      </span>
    </div>
    <ButtonComponent :text="'Show more'" />
  </div>
</template>
<!-- non-breaking hyphen &#8209; -->
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import UserCard from '../components/UserCard.vue';
import { useAppStore } from '../store';
import ButtonComponent from '../components/ButtonComponent.vue';
import { computed } from '@vue/reactivity';

const store = useAppStore();
const users = computed(() => store.getUsers)

onMounted(() => {

   store.upadateUsers(4);
});
// function getusers(){
//     console.log()
// }
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #f8f8f8;
  text-align: center;
  // margin-top: 50px;
  // padding: 50px 50px 50px 50px;
  .users-container {
    // border: 1px dotted red;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;
  }
}
.header {
  font-size: 40px;
  display: block;
  margin-bottom: 20px;
}
.user {
  display: inline-block;
  // margin-bottom: 20px;
}
</style>
