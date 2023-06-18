<script setup>
import { areaList } from "@vant/area-data";
import { toRefs } from "vue";
import { storeToRefs } from "pinia";
import { useSelectLocation } from "../../stores/store";

const { location } = storeToRefs(useSelectLocation());
const props = defineProps({
  showChooseCity: Boolean,
  setShowChooseCity: Function,
});
const { showChooseCity, setShowChooseCity } = toRefs(props);
const onConfirm = (e) => {
  location.value = e.detail.values;
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
