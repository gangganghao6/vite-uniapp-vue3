<script setup>
//城市选择组件
import { areaList } from "@vant/area-data";
import { toRefs } from "vue";
import { storeToRefs } from "pinia";
import { useMapLocation } from "../../../stores/store";
import { strToPoint } from "../../../utils/map";
import { moveTo } from "../../../utils/map";

const { currentPoint, location } = storeToRefs(useMapLocation());
const props = defineProps({
  showChooseCity: Boolean,
  setShowChooseCity: Function,
});
const emit = defineEmits(["setShowChooseCity"]);
const { showChooseCity } = toRefs(props);
const onConfirm = async (e) => {
  //选择城市位置后将其转换为经纬度并移动到该位置
  location.value = e.detail.values;
  const resultPoint = await strToPoint(
    e.detail.values[0].name + e.detail.values[1].name + e.detail.values[2].name
  );
  currentPoint.value = resultPoint;
  await moveTo(resultPoint);
  emit("setShowChooseCity", false);
};
</script>

<template>
  <van-popup :show="showChooseCity" round position="bottom">
    <van-area
      @cancel="setShowChooseCity(false)"
      @confirm="onConfirm"
      :area-list="areaList"
      :value="location.at(-1).code"
    />
  </van-popup>
</template>

<style scoped lang="scss"></style>
