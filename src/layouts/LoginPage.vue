<template>
  <div class="container">
    <span class="header">Test assignment for front-end developer</span>
    <br />
    <span class="content"
      >What defines a good front-end developer is one that has skilled knowledge
      of HTML , CSS , JS with a vast understanding of User design thinking as
      they'll be building web interfaces with accessibility in mind . They
      should also be excited to learn , as the world of Front&#8209;End Development
      keeps evolving .
    </span>
  </div>
</template>
<!-- non-breaking hyphen &#8209; -->
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
</script>

<style lang="scss" scoped>
.container {
  color: white;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  margin-top: 15%;
  span {
    // border: 1px dotted red;
  }
  .header {
    font-size: 40px;
    display: inline-block;
    margin-bottom: 20px;
  }
  .content {
    line-height: 1.8em;
    // word-break: keep-all;
  }
}
</style>
