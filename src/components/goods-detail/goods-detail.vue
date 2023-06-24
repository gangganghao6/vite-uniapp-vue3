<script setup>
import { toRefs } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["closePopup"]);
const { show } = toRefs(props);
</script>

<template>
  <van-popup
    :show="show"
    @click="emit('closePopup')"
    position="bottom"
    :custom-style="{ height: '50%' }"
  >
  </van-popup>
</template>

<style scoped lang="scss"></style>
