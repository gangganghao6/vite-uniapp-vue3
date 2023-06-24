<script setup>
//用户等级进度条组件
import { computed } from "vue";

const props = defineProps({
  progressNum: {
    type: Number,
    default: 0,
  },
});
const progressNumWidth = computed(() =>
  Math.floor((props.progressNum / 1000) * 100)
);
</script>

<template>
  <view class="container">
    <view class="progress-container">
      <view class="progress" :style="{ width: `${progressNumWidth}%` }"></view>
    </view>
    <view class="progress-num-container">{{ props.progressNum }}/1000</view>
  </view>
</template>

<style scoped lang="scss">
$progress-height: 6px;
.container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .progress-container {
    width: 75%;
    height: $progress-height;
    background-color: rgb(245, 245, 245);
    display: inline-block;
    position: relative;

    .progress {
      position: absolute;
      height: $progress-height;
      background-color: rgb(225, 225, 225);
    }
  }

  .progress-num-container {
    width: 20%;
    font-size: 20rpx;
    display: inline-block;
  }
}
</style>
