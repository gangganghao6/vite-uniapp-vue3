<script setup>
import { storeToRefs } from "pinia";
import { useMapLocation, useSelectLocation } from "../../stores/store";
import { ref, watch } from "vue";
import { onLoad, onUnload } from "@dcloudio/uni-app";
import QQMapWX from "../../utils/qqmap-wx-jssdk.js";
import promisify from "../../utils/promisify";

const mapInstance = uni.createMapContext("map-instance", this);
const { location } = storeToRefs(useSelectLocation());
const showChooseCity = ref(false);
const { currentPoint } = storeToRefs(useMapLocation());
const searchStr = ref("");
let qqmapsdk = new QQMapWX({
  key: "S4QBZ-4O3KU-5OTVV-GL24V-K27Q6-4CBE5",
});
function switchType(e) {
  console.log(e.detail);
}

const setShowChooseCity = (e) => {
  showChooseCity.value = e;
};

onLoad(async () => {
  const currentLocation = await promisify(uni.getLocation)({
    type: "gcj02",
  });
  currentPoint.value = currentLocation;
  mapInstance.moveToLocation({
    longitude: currentLocation.longitude,
    latitude: currentLocation.latitude,
  });
  const currentPosition = await promisify(
    qqmapsdk.reverseGeocoder,
    qqmapsdk
  )({
    location: {
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
    },
  });
  console.log(currentPosition.result);
  location.value = [
    {
      name: currentPosition.result.province,
      code: currentPosition.result.ad_info.adcode,
    },
    {
      name: currentPosition.result.city,
      code: currentPosition.result.ad_info.adcode,
    },
    {
      name: currentPosition.result.ad_info.district,
      code: currentPosition.result.ad_info.adcode,
    },
  ];
  watch(location, async (cur, pre) => {
    const targetPoint = await promisify(
      qqmapsdk.geocoder,
      qqmapsdk
    )({
      address: cur[0]?.name + cur[1]?.name + cur[2]?.name,
    });
    targetPoint.value = {
      longitude: targetPoint.result.location.lng,
      latitude: targetPoint.result.location.lat,
    };
    mapInstance.moveToLocation({
      ...targetPoint.value,
    });
  });
});
</script>

<template>
  <van-tabs swipeable @click="switchType">
    <map class="map-instance" id="map-instance" :show-location="true"></map>
    <van-tab title="到店">
      <location-search
        :searchStr="searchStr"
        :setShowChooseCity="setShowChooseCity"
      />
      <choose-city
        :showChooseCity="showChooseCity"
        :setShowChooseCity="setShowChooseCity"
      />
    </van-tab>
    <van-tab title="上门">内容 2</van-tab>
  </van-tabs>
</template>

<style scoped lang="scss">
.map-instance {
  width: 750rpx;
  height: 750rpx;
}

.input-class {
  width: 75rpx;
}
</style>
