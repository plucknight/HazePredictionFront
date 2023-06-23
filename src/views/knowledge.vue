<template>
  <div id="app">
    <Header />
    <KonwMain />
    <Bottom />
  </div>
</template>

<script setup>
import Header from "../components/page/header.vue";

import KonwMain from "../components/page/know-main.vue";
import Bottom from "../components/page/bottom.vue";
</script>

<style scoped>
@import "@/assets/css/index.less";
</style>
