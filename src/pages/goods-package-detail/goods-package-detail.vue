<script setup>
import GoodsDetail from "../../components/goods-detail/goods-detail.vue";
import { ref } from "vue";

const show = ref(true);
</script>

<template>
  <goods-detail :show="show" @close-popup="show.value = false" />
</template>

<style scoped lang="scss"></style>
