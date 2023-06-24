<script setup>
import { useStore } from "../../../../stores/store";
import { storeToRefs } from "pinia";

const { currentStore } = storeToRefs(useStore());
const props = defineProps({
  show: Boolean,
});
const emit = defineEmits(["onDetailClose"]);
const onClose = () => {
  emit("onDetailClose", false);
};
</script>

<template>
  <van-popup
    :show="props.show"
    round
    position="bottom"
    custom-style="height: 30%"
    @close="onClose"
    closeable
  >
    <view class="container">
      <view class="title">门店信息</view>
      <view class="msg-container">
        <view class="phone">电话：{{ currentStore.phone }}</view>
        <view class="time"
          >营业时间：{{ currentStore.startTime }}-{{ currentStore.endTime }}
        </view>
        <view class="board">公告：{{ currentStore.board }}</view>
      </view>
    </view>
  </van-popup>
</template>

<style scoped lang="scss">
.container {
  .title {
    font-size: 38rpx;
    font-weight: bold;
    text-align: center;
    margin-top: 20rpx;
  }

  .msg-container {
    font-size: 26rpx;
    //自动换行
    word-wrap: break-word;
    word-break: break-all;

    .phone,
    .time,
    .board {
      margin: 20rpx;
    }
  }
}
</style>
