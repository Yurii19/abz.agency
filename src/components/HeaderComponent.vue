<template>
  <v-app-bar>
    <v-container>
      <v-row no-gutters>
        <v-col class="col" cols="2">
          <!-- <v-img  src="../assets/Logo.svg"> </v-img> -->
          <img src="../assets/Logo.svg" alt="" />
        </v-col>
        <v-col class="col" cols="7">c2</v-col>
        <!-- <v-col class="col" cols="4">c2</v-col>
        <v-col class="col" cols="1">c3</v-col> -->
        <v-col class="col d-flex justify-end" cols="3">
          <v-btn
            class="elevation-0"
            :rounded="true"
            color="#f4e041"
            type="submit"
          >
            Sign up
          </v-btn>
          <v-btn class="elevation-0 ml-3" :rounded="true" :color="'#f4e041'">
            Sign up
          </v-btn></v-col
        >
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
  // bgColor: String,
  text: String,
});
</script>

<style lang="scss" scoped>
.col {
//   border: 1px dotted red;
}
.v-btn {
  background-color: #f4e041;
  color: black !important;
}
// .v-btn {background-color: aqua;}
</style>
