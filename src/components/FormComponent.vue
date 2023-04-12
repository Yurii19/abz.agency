<template>
  <div class="wrap">
    <span class="header">Working with POST request</span>
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent>
        <v-text-field
          variant="outlined"
          v-model="name"
          :rules="rules"
          label="Your name"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          v-model="email"
          :rules="rules"
          label="Email"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          v-model="phone"
          :rules="rules"
          label="Phone"
        ></v-text-field>
        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
    <v-text-field label="Label" variant="outlined"></v-text-field>
    <v-btn class="rounded-pill elevation-0" color="#f4e041"> Button </v-btn>
  </div>
</template>
<!-- non-breaking hyphen &#8209; -->
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import UserCard from '../components/UserCard.vue';
import { useAppStore } from '../store';
import ButtonComponent from '../components/ButtonComponent.vue';

const store = useAppStore();

const name = ref('');
const email = ref('');
const phone = ref('');

const rules = [
  (value: string): any => {
    if (value) return true;
  },
];

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
  margin-bottom: 50px;
  .users-container {
    border: 1px dotted red;
    display: flex;
    flex-wrap: wrap;
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
