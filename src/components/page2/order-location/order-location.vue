<script setup>
import { useStore } from "../../../stores/store";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import OrderPop from "./order-pop/order-pop.vue";
import OrderSwitcher from "./order-switcher/order-switcher.vue";

const { currentStore } = storeToRefs(useStore());
const isDetailShow = ref(false);
const changeDetailPop = (e) => {
  isDetailShow.value = e;
};
</script>

<template>
  <view class="container">
    <view class="left">
      <view class="name-container">
        <text class="name">{{ currentStore.name }}</text>
        <van-icon name="arrow" />
      </view>
      <view class="location-container">
        <van-icon name="location-o" />
        <text class="location">{{ currentStore.address }}</text>
      </view>
    </view>
    <view class="right">
      <order-switcher />
    </view>
  </view>
  <view class="down" @click="changeDetailPop(true)">
    <view>门店详细信息</view>
    <view>
      <text>点击查看</text>
      <van-icon name="arrow-down" />
    </view>
  </view>
  <order-pop :show="isDetailShow" @onDetailClose="changeDetailPop" />
</template>

<style scoped lang="scss">
.container {
  background-color: #fff;
  width: 750rpx;
  height: 100rpx;
  padding: 20rpx;
  display: flex;
  .left {
    width: 500rpx;
    .name-container {
      display: flex;
      .name {
        //超过一行省略号
        font-size: 36rpx;
        font-weight: bold;
        margin-right: 20rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .location-container {
      margin-top: 20rpx;
      font-size: 28rpx;
      color: rgb(143, 143, 143);
      .location {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .right {
    width: 250rpx;
  }
}
.down {
  display: flex;
  justify-content: space-between;
  padding: 11rpx 10rpx 0 10rpx;
  font-size: 26rpx;
  color: rgb(143, 143, 143);
  background-color: #fff;
}
</style>
