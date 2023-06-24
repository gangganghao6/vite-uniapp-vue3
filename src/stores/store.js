// stores/store.js
import { defineStore } from "pinia";

export const usePage = defineStore("page", {
  state: () => ({
    page: 2,
  }),
});
export const useMapLocation = defineStore("mapLocation", {
  state: () => ({
    isSelectedLocation: false, //是否选择了商铺地址
    isSelectedUserLocation: false, //是否选择了用户外送地址
    searchStr: "", //通过微信选点的搜索地址
    userLocation: { name: "", phone: "", address: "" }, //用户外送地址
    location: [{ code: "110000", name: "北京" }], //选择的省市区地址
    currentPoint: {
      //目标坐标点地址
      latitude: 0,
      longitude: 0,
    },
  }),
});
export const useStore = defineStore("store", {
  state: () => ({
    currentStore: {
      id: 1,
      name: "阿斯顿发大水发发文范围挖法地方阿第三方阿斯蒂芬阿斯蒂芬阿打发",
      distance: "1.65km",
      startTime: "09:00",
      endTime: "18:00",
      address: "江苏省南京市鼓楼区东大街 1 号",
      latitude: 31.231706,
      longitude: 122.472644,
      phone: "12345678901",
      board:
        "https://img.meituan.net/msmerchant/4a3a0b0b0b0b0b0b0b0b0b0b0b0b0b0b.jpg",
    },
    menus: [
      {
        id: 1,
        name: "商品1",
        price: 10,
        type: "类别1",
        src: "../../static/logo.png",
      },
    ],
  }),
});
export const useGoods = defineStore("goods", {
  state: () => ({
    currentGoods: {
      id: 1,
      name: "商品1",
      price: 10,
      type: {
        id: 1,
        name: "商品类别1",
      },
      custom: [
        {
          id: 1,
          name: "商品定制选项1",
          price: 10,
          isOnly: false,
          category: {
            id: 1,
            name: "种类类别1",
          },
        },
        {
          id: 2,
          name: "商品定制选项2",
          price: 10,
          isOnly: false,
          category: {
            id: 1,
            name: "种类类别1",
          },
        },
        {
          id: 3,
          name: "商品定制选项3",
          price: 10,
          isOnly: true,
          category: {
            id: 1,
            name: "种类类别2",
          },
        },
        {
          id: 4,
          name: "商品定制选项4",
          price: 10,
          isOnly: true,
          category: {
            id: 1,
            name: "种类类别2",
          },
        },
      ],
      src: "/static/logo.png",
      isEmpty: false,
      isPackage: false,
      haveCustom: true,
      haveVipDiscount: true,
      haveChuzhiDiscount: true,
    },
    showPopup: true,
  }),
});
