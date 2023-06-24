<script setup>
import { useGoods } from "../../../../stores/store";
import { storeToRefs } from "pinia";
import Vip from "../../../tags/vip.vue";
import Chuzhi from "../../../tags/chuzhi.vue";

const { showPopup } = storeToRefs(useGoods());
</script>

<template>
  <view class="container">
    <image class="image" src="../../static/logo.png" />
    <view class="detail-container">
      <view class="detail name"> 火山烧烤脆翅尖（5个装） </view>
      <vip :custom-style="{ margin: '10rpx 20rpx 10rpx 20rpx' }" />
      <chuzhi :custom-style="{ margin: '10rpx 20rpx 10rpx 20rpx' }" />
      <view class="detail price-but">
        <view class="price">￥10.44</view>
        <view class="button" @click="showPopup = true">选规格</view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  width: 553rpx;
  height: 220rpx;
  background-color: rgb(255, 255, 255);
  margin: 20rpx;
  display: flex;
  box-shadow: #bbbaba -1px 1px 3px 0px;
  border-radius: 12rpx;

  .image {
    height: 100%;
    width: 220rpx;
    object-fit: scale-down;
  }

  .detail-container {
    vertical-align: center;
    width: 333rpx;
    height: 100%;

    .detail {
      margin: 10rpx 20rpx 10rpx 20rpx;
      //超出两行省略号
    }

    .name {
      font-size: 28rpx;
      font-weight: bold;
      letter-spacing: 2rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 30rpx;
    }

    .price-but {
      display: flex;
      justify-content: space-between;

      .price {
        font-size: 28rpx;
        font-weight: bold;
      }

      .button {
        height: 40rpx;
        width: 100rpx;
        background-color: red;
        color: white;
        border-radius: 30rpx;
        font-size: 22rpx;
        text-align: center;
        line-height: 40rpx;
      }
    }
  }
}
</style>
