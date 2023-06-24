<script setup>
import MyStepper2 from "./my-stepper-2/my-stepper-2.vue";
import { ref } from "vue";

const num = ref(1);
const onNumChange = (value) => {
  num.value = value;
};
</script>

<template>
  <view class="container">
    <view class="top">
      <view class="left">
        <view class="price">￥22</view>
        <view class="custom"
          >有奶泡款有奶泡款有奶泡款有奶泡款有奶泡款有奶泡款有奶泡款有奶泡款
        </view>
      </view>
      <view class="right">
        <my-stepper2 :value="num" @change="onNumChange" />
      </view>
    </view>
    <view class="bottom">
      <van-button
        plain
        round
        color="red"
        block
        class="button"
        custom-style="font-size:35rpx;height:80rpx"
      >
        立即购买
      </van-button>
      <van-button
        round
        color="red"
        block
        class="button"
        custom-style="font-size:35rpx;height:80rpx"
      >
        加入购物袋
      </van-button>
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  background-color: white;
  position: fixed;
  width: 750rpx;
  border: 1px solid black;
  bottom: 0;

  .top {
    display: flex;
    align-items: center;

    .left {
      padding: 20rpx 30rpx 10rpx 30rpx;

      .price {
        font-size: 36rpx;
        font-weight: bold;
      }

      .custom {
        font-size: 24rpx;
      }
    }

    .right {
    }
  }

  .bottom {
    display: flex;
    justify-content: space-around;
    padding: 20rpx 0 20rpx 0;

    .button {
      width: 300rpx;
    }
  }
}
</style>
