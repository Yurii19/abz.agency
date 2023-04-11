<template>
  <div class="wrap">
    <span class="header">Working with GET request</span>
    <UserCard />
  </div>
</template>
<!-- non-breaking hyphen &#8209; -->
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import UserCard from '../components/UserCard.vue';

onMounted(() => {
//   fetch(
//     'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5'
//   )
//     .then((response) => response.json())
//     .then(
//       (data) => console.log(data)
//       // if(data.success) {
//       //   process success response } else { // proccess server errors } })
//     );
 });
</script>

<style lang="scss" scoped>
.wrap {
  background-color: white;
  text-align: center;
}
.header {
  font-size: 40px;
  display: inline-block;
  margin-bottom: 20px;
}
</style>
