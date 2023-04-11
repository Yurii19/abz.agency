C
<template>
  <div class="wrap">
    <div class="avatar">
      <img
        width="100"
        src="https://media.istockphoto.com/id/1126163079/vector/electric-plug-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=mPmDvDrXgJE93ciOboJMAMamuWinxMv36Fw_4kb_Cf0="
        alt=""
      />
    </div>
    <div class="name">
      <span>Salvador Stewart Flynn Thomas Salva Maria Pedro Huan </span>
    </div>
    <div class="info">
      <span
        >Leading specialist of the department of evaluating and prognoses web
        research vision
      </span>
      <br />
      <span>frontend_develop@gmail.com </span>
      <br />
      <span>+38 (098) 278 76 24 </span>
    </div>
  </div>
</template>
<!-- non-breaking hyphen &#8209; -->
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { ButtonComponent } from '../components/ButtonComponent.vue';
</script>

<style lang="scss" scoped>
.wrap {
  background-color: rgba(0, 0, 0, 0.3) !important;
  width: 300px;
  padding: 20px;
}
.avatar > img {
//   border: 1px solid red;
  border-radius: 50%;
}
.info {
  line-height: 26px;
  @extend .ext_elipsis;
}
.name {
  padding: 20px 0 20px 0;
  @extend .ext_elipsis;
}
.ext_elipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden !important;
  display: block;
}
</style>
