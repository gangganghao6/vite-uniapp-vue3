<script setup>
import { ref, toRefs } from "vue";
import { storeToRefs } from "pinia";
import { useSelectLocation } from "../../stores/store";

const { location } = storeToRefs(useSelectLocation());
const props = defineProps({
  searchStr: String,
  location: String,
  setShowChooseCity: Function,
});
const { searchStr } = toRefs(props);

function onChange(e) {
  console.log(e);
}

function onSearch(e) {
  console.log(e);
}
</script>

<template>
  <van-search
    :value="searchStr"
    placeholder="请输入搜索地址"
    :left-icon="false"
    @change="onChange"
    @search="onSearch"
  >
    <!--    <template v-slot:action>-->
    <!--      <view @tap="onClick">搜索</view>-->
    <!--    </template>-->
    <template v-slot:label>
      <view class="container" @tap="setShowChooseCity(true)">
        <text class="city-text">{{ location.at(-1).name }}</text>
        <image class="down-arrow" src="../../static/down-arrow.png"></image>
      </view>
    </template>
  </van-search>
</template>

<style scoped lang="scss">
.container {
  .city-text {
    font-size: 14px;
    line-height: 36px;
  }

  .down-arrow {
    width: 10px;
    height: 10px;
    margin-left: 5px;
    margin-top: 13px;
  }
}
</style>
