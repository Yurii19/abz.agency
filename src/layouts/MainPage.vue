<template>
  <div class="my-template">
    <WellcomeComponent />
    <UsersComponent />
  </div>
</template>
<!-- non-breaking hyphen &#8209; -->
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import WellcomeComponent from '../components/WellcomeComponent.vue';
import UsersComponent from '../components/UsersComponent.vue';
</script>

<style lang="scss" scoped>
.my-template {
  // border: 1px dotted greenyellow;
}
</style>
