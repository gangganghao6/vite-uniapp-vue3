<script setup>
import { areaList } from "@vant/area-data";
import { toRefs } from "vue";
import { storeToRefs } from "pinia";
import { useMapLocation } from "../../stores/store";
import { strToPoint } from "../../utils/map";
import { moveTo } from "../../utils/map";

const { currentPoint, location } = storeToRefs(useMapLocation());
const props = defineProps({
  showChooseCity: Boolean,
  setShowChooseCity: Function,
});
const { showChooseCity, setShowChooseCity } = toRefs(props);
const onConfirm = async (e) => {
  location.value = e.detail.values;
  const resultPoint = await strToPoint(
    e.detail.values[0].name + e.detail.values[1].name + e.detail.values[2].name
  );
  currentPoint.value = resultPoint;
  await moveTo(resultPoint);
  setShowChooseCity.value(false);
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
