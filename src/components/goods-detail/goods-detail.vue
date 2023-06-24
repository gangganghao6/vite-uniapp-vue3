<script setup>
import { toRefs } from "vue";
import { useGoods } from "../../stores/store";
import Vip from "../tags/vip.vue";
import Chuzhi from "../tags/chuzhi.vue";
import SingleCustom from "./single-custom/single-custom.vue";
import MultipleCustom from "./multiple-custom/multiple-custom.vue";
import AddOrBuy from "./add-or-buy/add-or-buy.vue";

const { showPopup, currentGoods } = toRefs(useGoods());
</script>

<template>
  <van-popup
    :show="showPopup"
    @close="showPopup = false"
    position="bottom"
    custom-style="height: 85%"
    closeable
    round
  >
    <view class="container">
      <view class="image-container">
        <image class="image" :src="currentGoods.src" mode="heightFix" />
      </view>
      <view class="name">{{ currentGoods.name }}</view>
      <view class="tags-container">
        <vip
          v-if="currentGoods.haveVipDiscount"
          :custom-style="{ 'margin-right': '20rpx' }"
        />
        <chuzhi v-if="currentGoods.haveChuzhiDiscount" />
      </view>
      <view class="custom-container">
        <single-custom />
        <single-custom />
        <single-custom />
        <single-custom />
        <single-custom />
        <single-custom />
        <multiple-custom />
      </view>
    </view>
    <add-or-buy />
  </van-popup>
</template>

<style scoped lang="scss">
.container {
  padding: 30rpx;
  margin-bottom: 300rpx;

  .image-container {
    text-align: center;

    .image {
      height: 400rpx;
    }
  }

  .name {
    font-size: 40rpx;
    font-weight: bold;
  }

  .tags-container {
    display: flex;
    margin-top: 20rpx;
    padding-bottom: 10rpx;
    border-bottom: 1rpx solid rgb(215, 215, 215);
  }
}
</style>
