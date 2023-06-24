<script setup>
import Toast from "@vant/weapp/lib/toast/toast";
import { ref } from "vue";

const props = defineProps({
  value: {
    type: Number,
    default: 1,
  },
});
const emit = defineEmits(["change", "style-change"]);
const onMinus = () => {
  if (props.value === 1) {
    Toast("数量不能小于1哦");
  } else {
    emit("change", props.value - 1);
  }
};
const onPlus = () => {
  emit("change", props.value + 1);
};
const onChange = (e) => {
  emit("change", Number(e.detail.value));
};
</script>

<template>
  <view class="container">
    <view class="minus" @click="onMinus">-</view>
    <input class="num" :value="props.value" @input="onChange" type="number" />
    <view class="plus" @click="onPlus"> +</view>
  </view>
</template>

<style scoped lang="scss">
@import "src/uni";

.container {
  display: flex;
  width: 150rpx;
  justify-content: center;
  margin-right: 20rpx;

  .num {
    width: 55rpx;
    height: 50rpx;
    border: 2rpx solid rgb(220, 220, 220);
    font-size: 26rpx;
    text-align: center;
    color: rgb(51, 51, 51);
  }

  .minus,
  .plus {
    font-size: 40rpx;
    color: $main-color;
    width: 50rpx;
    height: 50rpx;
    font-weight: bold;
    border: 2rpx solid rgb(220, 220, 220);
    line-height: 50rpx;
    text-align: center;
  }

  .minus {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }

  .plus {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }
}
</style>
