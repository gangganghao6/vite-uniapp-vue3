<script setup>
import OrderLocation from "./order-location/order-location.vue";
import GoodsType from "./goods-type/goods-type.vue";
import GoodsContainer from "./goods-container/goods-container.vue";
</script>

<template>
  <view class="container">
    <van-sticky>
      <view class="nav"></view>
      <order-location />
    </van-sticky>
    <view class="type-container">
      <goods-type />
    </view>
    <view class="goods-container">
      <goods-container />
      <goods-container />
      <goods-container />
      <goods-container />
      <goods-container />
      <goods-container />
      <goods-container />
      <goods-container />
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  background-color: rgb(255, 255, 255);
  position: relative;
  height: 100vh;

  .nav {
    height: 150rpx;
    background-color: #fff;
  }

  .type-container {
    position: absolute;
    left: 0;
    height: calc(100vh - 150rpx - 350rpx);
    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: 50px;
  }

  .goods-container {
    position: absolute;
    right: 0;
    overflow: scroll;
    height: calc(100vh - 150rpx - 350rpx);
    padding-bottom: 70px;
  }
}
</style>
