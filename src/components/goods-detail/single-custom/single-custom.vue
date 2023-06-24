<script setup>
import { ref } from "vue";

const emit = defineEmits(["change"]);
const props = defineProps({
  data: Object,
});

const selectedIndex = ref(0);
const onChange = (e) => {
  if (e.target.dataset.index !== undefined) {
    selectedIndex.value = e.target.dataset.index;
    emit("change", datas[selectedIndex.value]);
  }
};
const datas = [
  {
    id: 1,
    value: "标萃",
  },
  {
    id: 2,
    value: "精萃",
  },
];
</script>

<template>
  <view class="container">
    <text class="title">浓度</text>
    <view class="option-container" @click="onChange">
      <view
        v-for="(data, index) in datas"
        class="option"
        :class="{ selected: index === selectedIndex }"
        :key="data.id"
        :data-index="index"
      >
        {{ data.value }}
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
@import "src/uni";

.container {
  margin-top: 20rpx;

  .title {
    font-size: 30rpx;
    color: rgb(102, 102, 102);
  }

  .option-container {
    margin-top: 15rpx;
    display: flex;
    flex-wrap: wrap;

    .option {
      font-size: 28rpx;
      border-radius: 6rpx;
      background-color: rgb(248, 248, 248);
      color: rgb(102, 102, 102);
      margin-right: 30rpx;
      height: 55rpx;
      line-height: 55rpx;
      padding: 0 20rpx 0 20rpx;
    }

    .selected {
      background-color: $main-color;
      color: white;
    }
  }
}
</style>
