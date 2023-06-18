// stores/store.js
import { defineStore } from "pinia";

export const usePage = defineStore("page", {
  state: () => ({
    page: 1,
  }),
});
export const useSelectLocation = defineStore("selectLocation", {
  state: () => ({
    isSelectedLocation: false,
    location: [{ code: "110000", name: "北京" }],
  }),
  actions: {
    setLocation(location) {
      this.isSelectedLocation = true;
      this.location = location;
    },
  },
});
export const useMapLocation = defineStore("mapLocation", {
  state: () => ({
    currentPoint: {
      latitude: 0,
      longitude: 0,
    },
    targetPoint: {
      latitude: 0,
      longitude: 0,
    },
  }),
});
