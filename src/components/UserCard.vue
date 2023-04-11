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
      <span> {{ user.name }}</span>
    </div>
    <div class="info">
      <span> {{ user.position }} </span>
      <br />
      <span>{{ user.email }}</span>
      <br />
      <span>{{ user.phone }} </span>
    </div>
  </div>
</template>
<!-- non-breaking hyphen &#8209; -->
<script lang="ts" setup>
import { onMounted, ref, watch, defineProps } from 'vue';
import { IUser } from '../interfaces';

const props = defineProps({
  user: {
    type: Object as () => IUser,
    default: {
      email: 'fwef@fsf.com',
      id: 14128,
      name: 'Salvador Stewart Flynn Thomas Salva Maria Pedro Huan',
      phone: '+380662341212',
      photo:
        'https://frontend-test-assignment-api.abz.agency/images/users/64354c1a5aaca14128.jpeg',
      position:
        'Leading specialist of the department of evaluating and prognoses web research vision',
      position_id: 2,
      registration_timestamp: 1681214490,
    },
  },
});
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
