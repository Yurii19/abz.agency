<template>
  <div class="wrap mt-16 ">
    <span class="header mb-10">Working with POST request</span>
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="submit" ref="formSrc">
        <v-text-field
          class="my-8"
          variant="outlined"
          v-model="name"
          :rules="rules.nameRules"
          label="Your name"
          type="text"
        ></v-text-field>
        <v-text-field
          class="my-8"
          variant="outlined"
          v-model="email"
          :rules="rules.emailRules"
          label="Email"
          type="email"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          class="my-8"
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
            class="my-6"
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
          :disabled="!isFormValid"
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
import { loadPositionsIds, loadToken } from '../services';
import { nameRule, emailRule, phoneRule, addUser } from '../services';
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
const formSrc = ref(null);
const isFormValid = ref<boolean>(false);

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

watch(name, (newVal) => checkIfFormValid());
watch(email, (newVal) => checkIfFormValid());
watch(phone, (newVal) => checkIfFormValid());
watch(position, (newVal) => checkIfFormValid());
//watch(fileImg, (newVal) => console.log(newVal));

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
  if (size > 5000000) {
    fileErrors.value = [
      ...fileErrors.value,
      'The file size exceeds the maximum allowed(5Mb).',
    ];
  }
  checkImgDimensions(files[0]);
  console.log(files);
  checkIfFormValid();
  if (!files.length) return;
}

function clearFileInput(): void {
  fileImg = null;
  fileErrors.value = [];
  checkIfFormValid();
}

function submit(e: SubmitEvent): void {
  loadToken();
  if (!fileImg) {
    fileErrors.value = ['Select a file'];
    return;
  }

  if (formSrc.value !== null) {
    const theForm: any = formSrc.value;
    theForm.validate().then((formState: any) => {
      if (formState.valid && fileImg) {
        loadToken()
          .then((resp: any) => resp.token)
          .then((token: string) => {
            addUser(createNewUser(), token);
          });
      }
    });
  }
  if (!fileImg) {
    fileErrors.value = ['Select a file'];
  }
  // console.log('fileImg', fileImg);
}

function createNewUser() {
  const formData = new FormData();
  formData.append('name', name.value);
  formData.append('email', email.value);
  formData.append('phone', phone.value);
  formData.append('position_id', position.value);
  formData.append('photo', fileImg);
  return formData;
}

function checkIfFormValid() {
  const theForm: any = formSrc.value;
  theForm.validate().then((formState: any) => {
    if (formState.valid && fileImg && fileErrors.value.length === 0) {
      isFormValid.value = true;
    } else {
      isFormValid.value = false;
    }
  });
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
    checkIfFormValid();
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
