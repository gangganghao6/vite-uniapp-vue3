<script setup>
import Toast from "@vant/weapp/lib/toast/toast";
import { ref } from "vue";

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  id: {
    type: Number,
  },
});
const emit = defineEmits(["change", "style-change"]);
const onMinus = () => {
  if (props.value === 0) {
    Toast("数量不能小于0哦");
  } else {
    checkStyle(props.value - 1);
    emit("change", props.id, props.value - 1);
  }
};
const onPlus = () => {
  checkStyle(props.value + 1);
  emit("change", props.id, props.value + 1);
};

function checkStyle(value) {
  emit("style-change", props.id, value !== 0);
}
</script>

<template>
  <view class="container">
    <view
      class="minus"
      :class="{ selected: props.value !== 0 }"
      @click="onMinus"
    >
      -
    </view>
    <view class="num">{{ props.value }}</view>
    <view class="plus" :class="{ selected: props.value !== 0 }" @click="onPlus">
      +
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  width: 150rpx;
  justify-content: space-between;

  .num {
    width: 30rpx;
    height: 30rpx;
    line-height: calc(30rpx + 8rpx);
    text-align: center;
  }

  .minus,
  .plus {
    width: 30rpx;
    height: 30rpx;
    font-weight: bold;
    border: 4rpx solid rgb(84, 84, 84);
    border-radius: 50%;
    line-height: 30rpx;
    text-align: center;
  }
  .selected {
    border: 4rpx solid white;
  }
}
</style>
