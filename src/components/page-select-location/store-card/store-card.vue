<script setup>
//商铺卡片组件
import { goTo, moveTo, pointToStr } from "../../../utils/map";
import { toRefs } from "vue";
import { useMapLocation, useStore } from "../../../stores/store";
import { storeToRefs } from "pinia";

const { currentPoint, location, isSelectedLocation } = storeToRefs(
  useMapLocation()
);
const { currentStore } = storeToRefs(useStore());
const props = defineProps({
  store: Object,
});
const { store } = toRefs(props);

async function onMove() {
  //点击商铺卡片，移动到商铺位置
  location.value = await pointToStr(store.value);
  currentPoint.value = {
    longitude: store.value.longitude,
    latitude: store.value.latitude,
  };
  isSelectedLocation.value = true;
  currentStore.value = store;
  await moveTo(store.value);
}

function goToStore() {
  uni.redirectTo({
    url: "/pages/index/index?index=2",
  });
}
</script>

<template>
  <view class="container" @click="onMove">
    <view class="left">
      <view class="name">{{ store.name }}</view>
      <view class="address">{{ store.address }}</view>
      <view class="time">
        {{ store.startTime }}-{{ store.endTime }} 已休息
        <view class="distance">
          <van-icon name="location" />
          {{ store.distance }}
        </view>
      </view>
    </view>
    <view class="right">
      <van-button round type="info" size="small" class="but" @click="goToStore">
        去下单
      </van-button>
      <view class="button-container">
        <view class="single-container">
          <image
            src="../../static/导航.png"
            class="navigation"
            @click="goTo(store)"
          ></image>
        </view>
        <view class="single-container">
          <image src="../../static/电话.png" class="phone"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  width: 660rpx;
  margin: 24rpx;
  border: 1px solid rgba(153, 153, 153, 0.5);
  height: 160rpx;
  padding: 20rpx;
  border-radius: 10px;

  .left {
    width: 500rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;

    .name {
      font-weight: bolder;
      font-size: 18px;
    }

    .address,
    .time {
      font-size: 13px;
    }

    .distance {
      text-align: right;
      font-size: 14px;
      color: rgba(0, 89, 255, 0.97);
      display: inline-block;
    }
  }

  .right {
    width: 200rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .button-container {
      display: flex;
      justify-content: space-around;
      width: 200rpx;

      .single-container {
        width: 40rpx;
        height: 40rpx;

        image {
          width: 40rpx;
          height: 40rpx;
        }
      }
    }
  }
}
</style>
