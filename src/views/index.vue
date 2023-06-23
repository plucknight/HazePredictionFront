<template>
  <div id="app">
    <Header />
    <Main />
    <Bottom />
  </div>
</template>

<script setup>
import Main from "../components/page/index-main.vue";
import Header from "../components/page/header.vue";
import Bottom from "../components/page/bottom.vue";
</script>
<style>
@import "@/assets/css/index.less";
.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  --el-color-primary: #536eb2;
}
.demo-tabs > .el-tabs__content {
  padding: 0px;
  color: black;
  font-size: 32px;
  font-weight: 600;
}
</style>
