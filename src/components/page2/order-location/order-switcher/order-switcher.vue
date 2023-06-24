<script setup>
import { ref } from "vue";

const isSelected = ref(0);

function onDaodian() {
  isSelected.value = 0;
}

function onWaisong() {
  isSelected.value = 1;
}
</script>

<template>
  <view class="container">
    <view
      class="daodian-container"
      :class="{ selected: isSelected === 0 }"
      @click="onDaodian"
      ><text class="daodian">到店</text></view
    >
    <view
      class="waimai-container"
      :class="{ selected: isSelected === 1 }"
      @click="onWaisong"
      ><text class="waimai">外卖</text>
    </view>
  </view>
</template>

<style lang="scss">
.container {
  margin: 20rpx 0 0 30rpx;
  display: flex;
  width: 160rpx;
  border-radius: 30rpx;
  height: 50rpx;
  background-color: rgb(237, 237, 237);

  .daodian-container,
  .waimai-container {
    padding: 10rpx;
    font-size: 26rpx;
    width: 60rpx;
    line-height: 30rpx;
    font-weight: bold;
    color: black;
    border-radius: 30rpx;
  }
}
.daodian,
.waimai {
  margin-left: 5rpx;
}

.selected {
  background-color: rgb(230, 0, 0);
  color: white !important;
}
</style>
