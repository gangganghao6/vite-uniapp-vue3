<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useMapLocation } from "../../stores/store";
import promisify from "../../utils/promisify";
import { moveTo, pointToStr } from "../../utils/map";

const { currentPoint, location } = storeToRefs(useMapLocation());
const props = defineProps({
  setShowChooseCity: Function,
});
const searchStr = ref("");
const input = ref(null);

async function onFocus(e) {
  const targetLocation = await promisify(uni.chooseLocation, uni)();
  const locationStr = (await pointToStr(targetLocation)).result.ad_info;
  location.value = [
    { name: locationStr.province, code: locationStr.adcode.slice(0, 2) },
    { name: locationStr.city, code: locationStr.adcode.slice(0, 4) },
    { name: locationStr.district, code: locationStr.adcode },
  ];
  currentPoint.value = {
    longitude: targetLocation.longitude,
    latitude: targetLocation.latitude,
  };
  e.target.value = targetLocation.name;
  searchStr.value = targetLocation.name;
  await moveTo(targetLocation);
}
</script>

<template>
  <view class="container">
    <view class="msg-container" @click="props.setShowChooseCity(true)">
      <view class="city-text">{{ location.at(-1).name }}</view>
      <image class="down-arrow" src="../../static/down-arrow.png"></image>
    </view>
    <input
      ref="input"
      class="input"
      v-model="searchStr"
      placeholder="请输入搜索地址"
      @focus="onFocus"
    />
  </view>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  border: 20rpx solid rgb(255, 255, 255);
  background-color: rgb(245, 245, 245);
  height: 75rpx;

  .msg-container {
    display: flex;
    height: 75rpx;
    justify-content: center;
    align-items: center;
    width: 150rpx;

    .city-text {
      font-size: 14px;
    }

    .down-arrow {
      width: 10px;
      height: 10px;
      margin-left: 5px;
    }
  }

  .input {
    height: 75rpx;
    width: 100%;
  }
}
</style>
