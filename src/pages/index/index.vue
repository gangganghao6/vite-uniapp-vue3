<template>
  <view v-if="currentPage.page === 1">
    <page1 />
  </view>
  <view v-if="currentPage.page === 2">
    <page2 />
  </view>
  <view v-if="currentPage.page === 3">
    <page3 />
  </view>
  <view v-if="currentPage.page === 4">
    <page4 />
  </view>
  <van-tabbar :active="currentPage.page" @change="onChange">
    <van-tabbar-item icon="home-o" :name="1">标签</van-tabbar-item>
    <van-tabbar-item icon="search" dot :name="2">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o" info="哈哈" :name="3"
      >标签
    </van-tabbar-item>
    <van-tabbar-item icon="setting-o" info="20" :name="4">标签</van-tabbar-item>
  </van-tabbar>
  <!--  <van-button type="primary" @click="onSwitch">跳转到test-->
  <!--  </van-button>-->
</template>

<script setup>
import { useSelectLocation, usePage, useMapLocation } from "../../stores/store";
import { storeToRefs } from "pinia";

const currentPage = usePage();
const { isSelectedLocation } = storeToRefs(useMapLocation());
const onChange = (e) => {
  if (e.detail === 2 && !isSelectedLocation.value) {
    if (!isSelectedLocation.value) {
      uni.navigateTo({
        url: "/pages/select-location/select-location",
      });
    }
  } else {
    currentPage.page = e.detail;
  }
};
const onSwitch = (e) => {
  uni.navigateTo({
    url: "/pages/test/test",
  });
};
</script>

<style lang="scss" scoped></style>
