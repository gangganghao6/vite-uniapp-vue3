<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
@import "./wxcomponents/dist/common/index.wxss";
/*每个页面公共css */
page {
  background-color: rgb(244, 244, 244);
}
</style>
