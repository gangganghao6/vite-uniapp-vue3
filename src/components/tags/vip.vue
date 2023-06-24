<script setup>
const props = defineProps({
  customStyle: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <view class="vip" :style="props.customStyle">
    <van-icon class="vip-icon" name="vip-card-o" />
    <view class="vip-text">VIP卡享</view>
    <view class="vip-price">￥10.44</view>
  </view>
</template>

<style scoped lang="scss">
.vip {
  color: rgb(106, 58, 6);
  background-color: rgb(255, 220, 152);
  height: 30rpx;
  font-size: 18rpx;
  border-radius: 30rpx;
  padding-left: 10rpx;
  display: flex;
  width: 170rpx;
  justify-content: left;
  align-items: center;
  font-weight: bold;

  .vip-icon {
    margin-right: 6rpx;
  }

  .vip-price {
    color: red;
    font-weight: normal;
  }

  .vip-icon,
  .vip-text,
  .vip-price {
    line-height: 30rpx; //无效？
  }
}
</style>
