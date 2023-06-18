<script setup>
function switchToShop() {
  uni.navigateTo({
    url: "/pages/shop/shop",
  });
}

function getImages() {
  return [
    {
      url: "https://img.yzcdn.cn/vant/cat.jpeg",
      id: 1,
    },
    {
      url: "https://img.yzcdn.cn/vant/cat.jpeg",
      id: 2,
    },
  ];
}
</script>

<template>
  <view class="container">
    <image
      @click="switchToShop"
      class="backgroung-image"
      mode="widthFix"
      src="/static/logo.png"
    />
    <user-info1 />
    <view class="zw-container">
      <image src="../../static/logo.png" class="ziti-button" />
      <image src="../../static/logo.png" class="waisong-button" />
    </view>
    <image class="huodong-button" src="../../static/logo.png" />
    <image
      class="other-images"
      v-for="image in getImages()"
      :src="image.url"
      :key="image.id"
    />
  </view>
</template>

<style scoped lang="scss">
$button-height: 200rpx;
.container {
  padding-bottom: 50px;

  .backgroung-image {
    width: 750rpx;
  }

  .zw-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    .ziti-button,
    .waisong-button {
      width: 340rpx;
      height: $button-height;
    }

    .ziti-button {
      margin: 10rpx 10rpx 20rpx 20rpx;
    }

    .waisong-button {
      margin: 10rpx 20rpx 20rpx 10rpx;
    }
  }

  .huodong-button {
    height: $button-height;
    width: 710rpx;
    margin: 10rpx 20rpx 0 20rpx;
  }

  .other-images {
    width: 710rpx;
    margin: 10rpx 20rpx 0 20rpx;
  }
}
</style>
