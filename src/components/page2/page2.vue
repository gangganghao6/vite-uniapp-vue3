<script setup></script>

<template>
  <view class="container">
    <van-sticky>
      <view class="nav"></view>
      <order-location />
    </van-sticky>
    <!--    <van-row>-->
    <!--      <van-col span="5">-->
    <view class="type-container">
      <goods-type />
    </view>
    <!--      </van-col>-->
    <!--      <van-col span="19">-->
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
    <!--      </van-col>-->
    <!--    </van-row>-->
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
    height: calc(100vh - 150rpx - 330rpx);
    padding-bottom: 70px;
  }
}
</style>
