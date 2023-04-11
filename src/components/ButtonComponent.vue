<template>
  <button class="yellow">{{ text }}</button>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
  // bgColor: String,
  text: String,
});
</script>

<style lang="scss" scoped>
button {
  border-style: none;
  font-size: 16px;
  border-radius: 20px;
  padding: 10px 25px 10px 25px;
  cursor: pointer;
  &:active {
    color: white;
  }
}

.yellow {
  background-color: #f4e041;
  &:hover {
    background-color: #ffe302;
  }
}
</style>
