"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  Page1User();
}
const Page1User = () => "../page1-user/page1-user.js";
const _sfc_main = {
  __name: "page1",
  setup(__props) {
    function switchToShop() {
      common_vendor.index.navigateTo({
        url: "/pages/shop/shop"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(switchToShop)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1611efdf"], ["__file", "D:/前端项目/vite-uniapp-vue3/src/components/page1/page1.vue"]]);
wx.createComponent(Component);
