<template>
  <div class="wrap">
    <span class="header">Working with POST request</span>
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="submit">
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

        <v-radio-group v-model="position" :rules="rules" column>
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

        <div class="input-file">
          <v-file-input
            :placeholder="'input a file'"
            :rules="rules"
            variant="outlined"
            v-model="photo"
            show-size
            @change="onFileChange"
             :error-messages="fileErrors"
             @click:clear="clearFileInput"
          >
            <template #prepend-inner>
              <div class="upload px-3">
                <span>Upload</span>
              </div>
            </template>
          </v-file-input>
        </div>
        <v-btn
          class="elevation-0"
          :rounded="true"
          color="#f4e041"
          type="submit"
        >
          Sign up
        </v-btn>
      </v-form>
    </v-sheet>
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
const photo = ref();

const fileErrors = ref('')

const rules = [
  (value: string): any => {
    if (value) return true;
    return 'incorrect';
  },
];

onMounted(() => {
  store.upadateUsers(4);
});

function onFileChange(e: any) {
  var files = e.target.files || e.dataTransfer.files;
  console.log(files)
  fileErrors.value = 'Incorrect file type'
  if (!files.length) return;
  //this.createImage(files[0]);
}

function clearFileInput(){
  fileErrors.value = ''
}


function submit() {
  console.log('submit');
}
</script>

<style lang="scss" scoped>
.upload {
  border: 1px solid black;
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}

.wrap {
  // background-color: #f8f8f8;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 50px;
}
.header {
  font-size: 40px;
  display: block;
  margin-bottom: 20px;
}
</style>
