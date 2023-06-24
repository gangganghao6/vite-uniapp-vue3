<script setup>
//到店位置选择组件
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useMapLocation } from "../../../stores/store";
import { chooseLocation, moveTo, pointToStr } from "../../../utils/map";

const { currentPoint, location, searchStr } = storeToRefs(useMapLocation());
const props = defineProps({
  setShowChooseCity: Function,
});
const input = ref(null); //获取input元素
const emit = defineEmits(["setShowChooseCity"]);

async function onFocus(e) {
  //点击input组件后跳转到微信位置选择器，选择后定位到该位置
  const targetLocation = await chooseLocation();
  location.value = await pointToStr(targetLocation);
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
    <view class="msg-container" @click="emit('setShowChooseCity', true)">
      <view class="city-text">{{ location.at(-1).name }}</view>
      <image class="down-arrow" src="../../static/down-arrow.png"></image>
    </view>
    <input
      disabled
      ref="input"
      class="input"
      v-model="searchStr"
      placeholder="请输入搜索地址"
      @click="onFocus"
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
      font-size: 12px;
      font-weight: bold;
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
    font-size: 12px;
  }
}
</style>
