<template>
  <v-app>
    <v-main>
      <MainPage/>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import MainPage from './layouts/MainPage.vue'
import { useAppStore } from './store';

const store = useAppStore();

// export default defineComponent({
//   name: 'App',

  // components: {
  //   HelloWorld,
  //   MainPage
  // },
  onMounted(()=>{
  // store.upadateUsers(6);
});

  // data () {
  //   return {
      
  //     //
  //   }
  // },
// })
</script>
<style lang="scss" scoped>
  // body {
  //   border: 3px dotted green;
  // }
</style>
