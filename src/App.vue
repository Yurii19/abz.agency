<template>
  <v-app>
    <v-main>
      <MainPage/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import MainPage from './layouts/MainPage.vue'

export default defineComponent({
  name: 'App',

  components: {
    HelloWorld,
    MainPage
  },

  data () {
    return {
      //
    }
  },
})
</script>
<style lang="scss" scoped>
  // body {
  //   border: 3px dotted green;
  // }
</style>
