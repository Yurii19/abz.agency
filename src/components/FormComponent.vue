<template>
  <div class="wrap">
    <span class="header">Working with POST request</span>
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="submit">
        <v-text-field
          variant="outlined"
          v-model="name"
          :rules="rules.nameRules"
          label="Your name"
          type="text"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          v-model="email"
          :rules="rules.emailRules"
          label="Email"
          type="email"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          v-model="phone"
          :rules="rules.phoneRules"
          label="Phone"
          type="tel"
          hint="+38(xxx)xxx-xx-xx"
          persistent-hint
        ></v-text-field>
        <!-- <v-btn type="submit" block class="mt-2">Submit</v-btn> -->

        <v-radio-group v-model="position" :rules="rules.empty" column>
          <v-radio
            v-for="pos in positions"
            :key="pos.id"
            :label="pos.name"
            color="#00bdd3"
            :value="pos.id"
          ></v-radio>
        </v-radio-group>

        <div class="input-file">
          <v-file-input
            :placeholder="'input a file'"
            :rules="rules.empty"
            variant="outlined"
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
import { loadPositionsIds } from '../services';
import { nameRule, emailRule, phoneRule } from '../services';
import ButtonComponent from '../components/ButtonComponent.vue';

const store = useAppStore();

const name = ref<string>('');
const email = ref<string>('');
const phone = ref<string>('');
const position = ref<string>('');
//const photo = ref();
const fileErrors = ref<string[]>([]);
const positions = ref([{ id: 1, name: 'Worker' }]);
let fileImg: any = null;

const rules = {
  empty: [
    (value: string): boolean | string => {
      if (value) return true;
      return 'Input a value';
    },
  ],
  nameRules: [(value: string): boolean | string => nameRule(value)],
  emailRules: [(value: string): boolean | string => emailRule(value)],
  phoneRules: [(value: string): boolean | string => phoneRule(value)],
};

onMounted(() => {
  store.upadateUsers(5);
  loadPositionsIds().then((response) => (positions.value = response.positions));
});

function onFileChange(e: any) {
  clearFileInput();
  var files = e.target.files || e.dataTransfer.files;
  fileImg = files[0];
  const type = files[0].type;
  const size = files[0].size;
  if (type !== 'image/jpeg') {
    fileErrors.value = [
      ...fileErrors.value,
      'Incorrect file type. Must be jpeg/jpg type',
    ];
  }
  if (size > 10000) {
    fileErrors.value = [
      ...fileErrors.value,
      'The file size exceeds the maximum allowed(5Mb).',
    ];
  }
  checkImgDimensions(files[0]);

  console.log(files);

  if (!files.length) return;
}

function clearFileInput(): void {
  fileImg = null;
  fileErrors.value = [];
}

function submit(): void {
  //fileErrors.value = ['Unknown error'];
if(!fileImg){
  fileErrors.value = ['Select a file'];
}
  console.log('submit', name.value, name.value.length);
  console.log('fileImg', fileImg);
}

function checkImgDimensions(imgSrc: any): void {
  let img = new Image();
  img.src = window.URL.createObjectURL(imgSrc);
  img.onload = () => {
    const width = img.width;
    const height = img.height;
    //console.log('dimensions ', width, 'x', height);
    if (width < 70 || height < 70) {
      fileErrors.value = [
        ...fileErrors.value,
        'The file dimensions too small(70x70 minimum require).',
      ];
    }
  };
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
