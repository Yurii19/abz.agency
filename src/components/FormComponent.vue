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
          type="text"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          v-model="email"
          :rules="rules"
          label="Email"
          type="email"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          v-model="phone"
          :rules="rules"
          label="Phone"
          type="tel"
        ></v-text-field>
        <!-- <v-btn type="submit" block class="mt-2">Submit</v-btn> -->

        <v-radio-group v-model="position" column>
          <v-radio
            label="Frontend developer"
            color="#00bdd3"
            value="frontend"
          ></v-radio>
          <v-radio
            label="Backend developer"
            color="#00bdd3"
            value="backend"
          ></v-radio>
          <v-radio label="Designer" color="#00bdd3" value="designer"></v-radio>
          <v-radio label="QA" color="#00bdd3" value="tester"></v-radio>
        </v-radio-group>
        <v-btn
          class="elevation-0"
          :rounded="true"
          color="#f4e041"
          @click="getModels"
        >
          Sign up
        </v-btn>
      </v-form>
    </v-sheet>
    <v-btn
      class="elevation-0"
      :rounded="true"
      color="#f4e041"
      @click="getModels"
    >
      Button
    </v-btn>
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
const position = ref('');

const rules = [
  (value: string): any => {
    if (value) return true;
  },
];

function getModels() {
  console.log('name > ', name.value);
  console.log('name > ', email.value);
  console.log('name > ', phone.value);
  console.log('name > ', position.value);
}

onMounted(() => {
  store.upadateUsers(4);
});
// function getusers(){
//     console.log()
// }
</script>

<style lang="scss" scoped>
.wrap {
  // background-color: #f8f8f8;
  text-align: center;
  margin-bottom: 50px;
}
.header {
  font-size: 40px;
  display: block;
  margin-bottom: 20px;
}
</style>
