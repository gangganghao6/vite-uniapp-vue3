<script setup>
const props = defineProps({
  customStyle: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <view class="chuzhi" :style="props.customStyle">
    <view class="chuzhi-price">￥10.44</view>
    <view class="chuzhi-text">储值享</view>
  </view>
</template>

<style scoped lang="scss">
.chuzhi {
  display: flex;
  font-size: 18rpx;
  width: 144rpx;
  height: 30rpx;

  .chuzhi-price {
    color: rgb(255, 84, 134);
    border: 1rpx solid rgb(255, 84, 134);
  }

  .chuzhi-text {
    color: white;
    background-color: rgb(255, 84, 134);
    border: 1rpx solid rgb(255, 84, 134);
  }

  .chuzhi-price,
  .chuzhi-text {
    line-height: 25rpx;
    padding: 0 4rpx 0 4rpx;
  }
}
</style>
