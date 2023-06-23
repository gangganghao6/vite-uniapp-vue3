<script setup>
import { reactive, ref } from "vue";
import { useMapLocation } from "../../stores/store";
import { storeToRefs } from "pinia";
import { chooseAddress, pointToStr, strToPoint, moveTo } from "../../utils/map";
import { onLoad } from "@dcloudio/uni-app";

const {
  location,
  currentPoint,
  searchStr,
  isSelectedUserLocation,
  userLocation,
} = storeToRefs(useMapLocation());
const showChooseCity = ref(false); //是否显示城市选择器
const currentTab = ref(0); //当前的tab（0：到店，1：外送）
const stores = reactive([
  //商铺列表
  {
    id: 1,
    name: "1111",
    distance: "1.65km",
    startTime: "09:00",
    endTime: "18:00",
    address: "江苏省南京市鼓楼区东大街 1 号",
    latitude: 31.231706,
    longitude: 122.472644,
  },
  {
    id: 2,
    name: "2222",
    distance: "165m",
    startTime: "09:00",
    endTime: "18:00",
    address: "江苏省南京市鼓楼区东大街 1 号",
    latitude: 31.231706,
    longitude: 121.472644,
  },
  {
    id: 3,
    name: "2222",
    distance: "165m",
    startTime: "09:00",
    endTime: "18:00",
    address: "江苏省南京市鼓楼区东大街 1 号",
    latitude: 31.231706,
    longitude: 121.472644,
  },
  {
    id: 4,
    name: "2222",
    distance: "165m",
    startTime: "09:00",
    endTime: "18:00",
    address: "江苏省南京市鼓楼区东大街 1 号",
    latitude: 31.231706,
    longitude: 121.472644,
  },
]);
const selectLocation = async () => {
  //选择外送地址，并将地址转换为坐标，定位到坐标处
  const result = await chooseAddress();
  const locationStr =
    result.provinceName +
    result.cityName +
    result.countyName +
    result.detailInfo;
  userLocation.value.name = result.userName;
  userLocation.value.phone = result.telNumber;
  userLocation.value.address = locationStr;
  currentPoint.value = await strToPoint(locationStr);
  location.value = await pointToStr(currentPoint.value);
  searchStr.value = result.detailInfo;
  isSelectedUserLocation.value = true;
  await moveTo(currentPoint.value);
};

async function switchType({ detail }) {
  //切换tab时验证是否选择了外送地址
  currentTab.value = detail.index;
  if (detail.index === 1 && !isSelectedUserLocation.value) {
    await selectLocation();
  }
}

const setShowChooseCity = (e) => {
  showChooseCity.value = e;
};
</script>

<template>
  <van-tabs
    class="custom-class"
    @click="switchType"
    sticky
    type="card"
    color="rgb(80,80,80)"
  >
    <view class="map-container">
      <my-map />
      <location-search
        v-if="currentTab === 0"
        @setShowChooseCity="setShowChooseCity"
      />
      <choose-city
        v-if="currentTab === 0"
        :showChooseCity="showChooseCity"
        @setShowChooseCity="setShowChooseCity"
      />
      <select-location-waisong
        v-if="currentTab === 1"
        @selectLocation="selectLocation"
      />
    </view>
    <van-tab title="到店">
      <view class="card-container">
        <store-card v-for="store in stores" :store="store" :key="store.id" />
      </view>
    </van-tab>
    <van-tab title="上门">
      <view class="card-container">
        <store-card v-for="store in stores" :store="store" :key="store.id" />
      </view>
    </van-tab>
  </van-tabs>
</template>

<style scoped lang="scss">
.custom-class {
  background-color: rgb(255, 255, 255);

  .map-container {
    position: fixed;
    z-index: 1;
  }

  .card-container {
    margin-top: 880rpx;
  }
}
</style>
