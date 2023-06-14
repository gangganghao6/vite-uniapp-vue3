<script setup>
import Page1User from "../page1-user/page1-user.vue";

function switchToShop() {
  uni.navigateTo({
    url: '/pages/shop/shop'
  })
}
</script>

<template>
  <view>
    <image @click="switchToShop" class="backgroung-image" mode="widthFix" src="/static/logo.png"/>
    <page1-user/>
  </view>
</template>

<style scoped lang="scss">
.backgroung-image{
  width: 750rpx;
}
</style>