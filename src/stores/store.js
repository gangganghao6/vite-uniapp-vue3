// stores/store.js
import { defineStore } from "pinia";

export const usePage = defineStore("page", {
  state: () => ({
    page: 1,
  }),
});
export const useMapLocation = defineStore("mapLocation", {
  state: () => ({
    isSelectedLocation: false,
    location: [{ code: "110000", name: "北京" }],
    currentPoint: {
      latitude: 0,
      longitude: 0,
    },
  }),
});
export const useStore = defineStore("store", {
  state: () => ({
    currentStore: {},
  }),
});
