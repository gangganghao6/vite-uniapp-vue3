<script setup>
import { reactive, ref, watch } from "vue";
import MyStepper from "./my-stepper-1/my-stepper-1.vue";

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
    price: 2,
    num: 0,
  },
  {
    id: 2,
    value: "精萃",
    price: 3.5,
    num: 0,
  },
];
const myDatas = reactive([...datas]);
const changeStepper = (id, num) => {
  myDatas.forEach((item) => {
    if (item.id === id) {
      item.num = num;
    }
  });
};
const selectedIndexs = ref([]);
const changeStyle = (id, result) => {
  if (result === true && !selectedIndexs.value.includes(id)) {
    selectedIndexs.value.push(id);
  } else if (result === false && selectedIndexs.value.includes(id)) {
    selectedIndexs.value.splice(selectedIndexs.value.indexOf(id), 1);
  }
};
</script>
<template>
  <view class="container">
    <text class="title">浓度</text>
    <view class="option-container" @click="onChange">
      <view
        v-for="(data, index) in myDatas"
        class="option"
        :class="{ selected: selectedIndexs.includes(data.id) }"
        :key="data.id"
        :data-index="index"
      >
        <view class="text">{{ data.value }}</view>
        <view class="price">￥{{ data.price }}</view>
        <my-stepper
          :id="data.id"
          :value="data.num"
          @change="changeStepper"
          @style-change="changeStyle"
        />
      </view>
    </view>
  </view>
</template>

<style lang="scss">
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
    flex-direction: column;

    .option {
      font-size: 28rpx;
      border-radius: 6rpx;
      background-color: rgb(248, 248, 248);
      color: rgb(102, 102, 102);
      margin-bottom: 15rpx;
      height: 70rpx;
      padding: 0 20rpx 0 20rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .price {
        margin-left: 300rpx;
      }
    }

    .selected {
      background-color: $main-color;
      color: white;
    }
  }
}
</style>
