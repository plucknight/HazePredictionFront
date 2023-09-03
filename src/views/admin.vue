<template>
  <Header />
  <div>
    <div class="middle">
      <el-pagination
        :page-sizes="[10, 20, 30, 50]"
        :page-size="pageSize"
        :total="totalItems"
        v-model:current-page="currentPage"
        layout="sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>

    <ul class="data-list">
      <li class="data-header">
        <span class="date">日期</span>
        <span v-for="item in dataItems" :key="item">{{ item }}</span>
      </li>
      <li v-for="item in currentPageData" :key="item.date" class="data-item">
        <span class="date">{{ item.date }}</span>
        <span>{{ item.so2 }}</span>
        <span>{{ item.no2 }}</span>
        <span>{{ item.co }}</span>
        <span>{{ item.o3 }}</span>
        <span>{{ item.pm25 }}</span>
        <span>{{ item.pm10 }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Header from "../components/page/header.vue";
import { ref, reactive, onMounted, watch } from "vue";
import axios from "axios";
import { BASE_URL } from "@/service/config/index";

const dataItems = ["SO2", "NO2", "CO", "O3", "PM2.5", "PM10"];

const currentPage = ref(1);
const pageSize = ref(10);
const totalItems = ref(0);
const allData = reactive([]);
const currentPageData = ref([]);

onMounted(async () => {
  try {
    const response = await axios.post(BASE_URL + "/admin");
    allData.value = response.data.data;
    totalItems.value = allData.value.length;

    updateCurrentPageData();
  } catch (error) {
    console.error("获取数据失败：", error);
  }
});

watch([currentPage, pageSize], updateCurrentPageData);

function updateCurrentPageData() {
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = startIndex + pageSize.value;

  currentPageData.value = allData.value.slice(startIndex, endIndex);
}

function handleSizeChange(val) {
  pageSize.value = val;
}

function handlePageChange(val) {
  currentPage.value = val;
}
</script>

<style scoped>
@import "@/assets/css/index.less";
.middle {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.data-list {
  list-style: none;
  padding: 0;
}

.data-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 10px;
  font-weight: bold;
  border-bottom: 1px solid #e1e1e1;
  padding: 5px 10px;
}

.data-item {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
  padding: 5px 10px;
}

.data-item .date {
  font-weight: bold;
  margin-right: 5px;
}
</style>
