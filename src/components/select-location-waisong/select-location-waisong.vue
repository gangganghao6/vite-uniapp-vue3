<script setup>
//外送位置选择组件（展示）
import { useMapLocation } from "../../stores/store";
import { storeToRefs } from "pinia";

const emit = defineEmits(["selectLocation"]);
const { userLocation } = storeToRefs(useMapLocation());
</script>

<template>
  <view class="container" @click="emit('selectLocation')">
    <view class="text-container">
      <text>{{ userLocation.name }} {{ userLocation.phone }}</text>
      <text>{{ userLocation.address }}</text>
    </view>
    <image class="right-arrow" src="../../static/right-arrow.png" />
  </view>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  height: 115rpx;

  .text-container {
    width: 600rpx;
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }

  .right-arrow {
    width: 40rpx;
    height: 40rpx;
  }
}
</style>
