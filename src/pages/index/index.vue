<script setup>
import { usePage, useMapLocation } from "../../stores/store";
import { storeToRefs } from "pinia";
import { onLoad } from "@dcloudio/uni-app";

const currentPage = usePage();
const { page } = storeToRefs(currentPage);
const { isSelectedLocation } = storeToRefs(useMapLocation());
const onChange = (e) => {
  console.log(e);
  // if (e.detail === 2 && !isSelectedLocation.value) {
  //   //如果是点餐页并且未选择商铺，则跳转到选择商铺页
  //   if (!isSelectedLocation.value) {
  //     uni.navigateTo({
  //       url: "/pages/select-location/select-location",
  //     });
  //   }
  // } else {
  page.value = e.detail;
  // }
};
onLoad((e) => {
  if (e.index) {
    uni.navigateTo({
      url: "/pages/order/order",
    });
    console.log("x");
    // currentPage.page = 2;
  }
});
const onSwitch = (e) => {
  uni.navigateTo({
    url: "/pages/test/test",
  });
};
</script>
<template>
  <view v-if="page === 1">
    <page1 />
  </view>
  <view v-if="page === 2">
    <page2 />
  </view>
  <view v-if="page === 3">
    <page3 />
  </view>
  <view v-if="page === 4">
    <page4 />
  </view>
  <van-tabbar :active="page" @change="onChange">
    <van-tabbar-item icon="home-o" :name="1">首页</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" dot :name="2">点单</van-tabbar-item>
    <van-tabbar-item icon="orders-o" info="哈哈" :name="3"
      >订单
    </van-tabbar-item>
    <van-tabbar-item icon="user-o" info="20" :name="4">我的</van-tabbar-item>
  </van-tabbar>
  <!--  <van-button type="primary" @click="onSwitch">跳转到test-->
  <!--  </van-button>-->
</template>
<style lang="scss"></style>
