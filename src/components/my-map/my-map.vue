<script setup>
//地图组件
import { getCurrentInstance } from "vue";
import { storeToRefs } from "pinia";
import { useMapLocation } from "../../stores/store";
import { onLoad } from "@dcloudio/uni-app";
import { getCurrentPoint, initMap, moveTo, pointToStr } from "../../utils/map";

const { currentPoint, location } = storeToRefs(useMapLocation());
let mapInstance = uni.createMapContext("map-instance", getCurrentInstance());

const resetMap = async () => {
  //重置地图，使其回到当前位置
  const tempPoint = await getCurrentPoint();
  await moveTo(tempPoint);
  location.value = await pointToStr(tempPoint);
  currentPoint.value = {
    longitude: tempPoint.longitude,
    latitude: tempPoint.latitude,
  };
};
onLoad(async () => {
  initMap(mapInstance); //初始化地图，将地图实例传给map.js中
  await resetMap();
});
</script>

<template>
  <map
    class="map-instance"
    id="map-instance"
    :show-location="true"
    :include-points="[currentPoint]"
    :max-scale="19"
  >
    <view class="map-button-container" @click="resetMap">
      <image src="../../static/map-button.png" class="map-button"></image>
    </view>
  </map>
</template>

<style scoped lang="scss">
.map-instance {
  width: 750rpx;
  height: 750rpx;
  z-index: 1000 !important;
  .map-button-container {
    width: 75rpx;
    height: 75rpx;
    background-color: rgb(255, 255, 255);
    position: absolute;
    right: 50rpx;
    bottom: 50rpx;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px 1px #9c9c9c;

    .map-button {
      width: 50rpx;
      height: 50rpx;
    }
  }

  .map-center-container {
    width: 100rpx;
    height: 100rpx;
    background-color: transparent;
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    display: flex;
    align-items: center;
    justify-content: center;

    .map-center {
      width: 75rpx;
      height: 75rpx;
    }
  }
}
</style>
