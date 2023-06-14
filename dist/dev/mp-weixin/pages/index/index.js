"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_page = require("../../stores/page.js");
if (!Array) {
  const _easycom_page12 = common_vendor.resolveComponent("page1");
  const _easycom_page22 = common_vendor.resolveComponent("page2");
  const _easycom_page32 = common_vendor.resolveComponent("page3");
  const _easycom_page42 = common_vendor.resolveComponent("page4");
  const _component_van_tabbar_item = common_vendor.resolveComponent("van-tabbar-item");
  const _component_van_tabbar = common_vendor.resolveComponent("van-tabbar");
  (_easycom_page12 + _easycom_page22 + _easycom_page32 + _easycom_page42 + _component_van_tabbar_item + _component_van_tabbar)();
}
const _easycom_page1 = () => "../../components/page1/page1.js";
const _easycom_page2 = () => "../../components/page2/page2.js";
const _easycom_page3 = () => "../../components/page3/page3.js";
const _easycom_page4 = () => "../../components/page4/page4.js";
if (!Math) {
  (_easycom_page1 + _easycom_page2 + _easycom_page3 + _easycom_page4)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const currentPage = stores_page.usePage();
    const onChange = (e) => {
      currentPage.page = e.detail;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(currentPage).page === 1
      }, common_vendor.unref(currentPage).page === 1 ? {} : {}, {
        b: common_vendor.unref(currentPage).page === 2
      }, common_vendor.unref(currentPage).page === 2 ? {} : {}, {
        c: common_vendor.unref(currentPage).page === 3
      }, common_vendor.unref(currentPage).page === 3 ? {} : {}, {
        d: common_vendor.unref(currentPage).page === 4
      }, common_vendor.unref(currentPage).page === 4 ? {} : {}, {
        e: common_vendor.p({
          icon: "home-o",
          name: 1
        }),
        f: common_vendor.p({
          icon: "search",
          dot: true,
          name: 2
        }),
        g: common_vendor.p({
          icon: "friends-o",
          info: "哈哈",
          name: 3
        }),
        h: common_vendor.p({
          icon: "setting-o",
          info: "20",
          name: 4
        }),
        i: common_vendor.o(onChange),
        j: common_vendor.p({
          active: common_vendor.unref(currentPage).page
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端项目/vite-uniapp-vue3/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
