<script setup></script>

<template>
  <view class="container">
    <image class="image" src="../../static/logo.png" />
    <view class="detail-container">
      <view class="detail name">火山烧烤脆翅尖（5个装）</view>
      <view class="detail vip">
        <van-icon class="vip-icon" name="vip-card-o" />
        <view>VIP卡享</view>
        <view class="vip-price">￥10.44</view>
      </view>
      <view class="detail chuzhi">
        <view class="chuzhi-price">￥10.44</view>
        <view class="chuzhi-text">储值享</view>
      </view>
      <view class="detail price-but">
        <view class="price">￥10.44</view>
        <view class="button">选规格</view>
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

    .vip {
      background-color: rgb(255, 220, 152);
      font-size: 18rpx;
      font-weight: bold;
      border-radius: 30rpx;
      padding-left: 10rpx;
      display: flex;
      width: 50%;
      line-height: 30rpx;
      justify-content: left;
      align-items: center;

      .vip-icon {
        margin-right: 6rpx;
      }

      .vip-price {
        color: red;
      }
    }

    .chuzhi {
      display: flex;
      font-size: 18rpx;

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
        line-height: 30rpx;
        padding: 0 4rpx 0 4rpx;
      }
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
