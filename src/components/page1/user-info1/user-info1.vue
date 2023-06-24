<script setup>
//首页的用户头像等组件
import { ref } from "vue";
import ProgressBar from "./progress-bar/progress-bar.vue";

const progressNum = ref(999);
</script>

<template>
  <view class="container">
    <image src="/static/logo.png" class="avatar" />
    <view class="progress">
      <view class="user-name">
        微信用户
        <van-tag plain type="primary">lv1</van-tag>
      </view>
      <progress-bar :progressNum="progressNum" />
    </view>
    <view class="jifen">
      <view>积分</view>
      <view>0</view>
    </view>
    <view class="youhuiquan">
      <view>优惠券</view>
      <view>2张</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  width: calc(100% - 40rpx);
  height: 100rpx;
  margin: 20rpx;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 12rpx;
  .avatar {
    border-radius: 50%;
    width: 70rpx;
    height: 70rpx;
    margin-right: -10rpx;
  }

  .progress {
    flex-shrink: 0.5;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .user-name {
      font-weight: bolder;
      font-size: 28rpx;
      margin-bottom: 6rpx;
    }
  }

  .jifen {
    margin-right: -30rpx;
  }

  .jifen,
  .youhuiquan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100%;
    font-size: 28rpx;
  }
}
</style>
