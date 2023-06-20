<script setup>
import { reactive, ref } from "vue";

const showChooseCity = ref(false);
const stores = reactive([
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
]);

function switchType(e) {
  console.log(e.detail);
}

const setShowChooseCity = (e) => {
  showChooseCity.value = e;
};
</script>

<template>
  <van-tabs @click="switchType">
    <my-map />
    <van-tab title="到店">
      <location-search :setShowChooseCity="setShowChooseCity" />
      <choose-city
        :showChooseCity="showChooseCity"
        :setShowChooseCity="setShowChooseCity"
      />
    </van-tab>
    <store-card v-for="store in stores" :store="store" :key="store.id" />
    <van-tab title="上门">内容 2</van-tab>
  </van-tabs>
</template>

<style lang="scss">
page {
  background-color: rgb(255, 255, 255);
}
</style>
