<script setup>
import { ref } from "vue";

const activeKey = ref(1);
</script>

<template>
  <van-sidebar :active-key="activeKey" :lock-scroll="false">
    <van-sidebar-item title="标签名" dot />
    <van-sidebar-item title="标签名" badge="5" />
    <van-sidebar-item title="标签名" badge="99+" />
    <van-sidebar-item title="标签名" dot />
    <van-sidebar-item title="标签名" badge="5" />
    <van-sidebar-item title="标签名" badge="99+" />
    <van-sidebar-item title="标签名" dot />
    <van-sidebar-item title="标签名" badge="5" />
    <van-sidebar-item title="标签名" badge="99+" />
    <van-sidebar-item title="标签名" dot />
    <van-sidebar-item title="标签名" badge="5" />
    <van-sidebar-item title="标签名" badge="99+" />
    <van-sidebar-item title="标签名" dot />
    <van-sidebar-item title="标签名" badge="5" />
    <van-sidebar-item title="标签名" badge="99+" />
    <van-sidebar-item title="标签名" dot />
    <van-sidebar-item title="标签名" badge="5" />
    <van-sidebar-item title="标签名" badge="99+" />
  </van-sidebar>
</template>

<style scoped lang="scss"></style>
