<template>
  <div class="my-template">
    <HeaderComponent/>
    <WellcomeComponent />
    <UsersComponent />
    <FormComponent />
  </div>
</template>
<!-- non-breaking hyphen &#8209; -->
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import WellcomeComponent from '../components/WellcomeComponent.vue';
import UsersComponent from '../components/UsersComponent.vue';
import FormComponent from '../components/FormComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
</script>

<style lang="scss" scoped>
.my-template {
  // border: 1px dotted greenyellow;
}
</style>
