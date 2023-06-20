<script setup>
import { goTo, pointToStr } from "../../utils/map";
import { toRefs } from "vue";
import { moveTo } from "../../utils/map";
import { useMapLocation } from "../../stores/store";

const { currentPoint, location } = useMapLocation();
const props = defineProps({
  store: Object,
});
const { store } = toRefs(props);

async function onMove() {
  const locationStr = (await pointToStr(store.value)).result.ad_info;
  location.value = [
    { name: locationStr.province, code: locationStr.adcode.slice(0, 2) },
    { name: locationStr.city, code: locationStr.adcode.slice(0, 4) },
    { name: locationStr.district, code: locationStr.adcode },
  ];
  currentPoint.value = {
    longitude: store.value.longitude,
    latitude: store.value.latitude,
  };
  await moveTo(store.value);
}
</script>

<template>
  <view class="container" @click="onMove">
    <view class="left">
      <text class="name">{{ store.name }}</text>
      <text class="address">{{ store.address }}</text>
      <text class="time">{{ store.startTime }}-{{ store.endTime }} 已休息</text>
    </view>
    <view class="right">
      <text class="distance">{{ store.distance }}</text>
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
  }

  .right {
    width: 200rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .distance {
      text-align: right;
      font-size: 13px;
    }

    .button-container {
      display: flex;
      justify-content: space-around;

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
