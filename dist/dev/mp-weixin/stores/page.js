"use strict";
const common_vendor = require("../common/vendor.js");
const usePage = common_vendor.defineStore("page", {
  state: () => ({ page: 1 })
});
exports.usePage = usePage;
