<template>
  <div class="demo-date-picker">
    <div class="container">
      <div class="block">
        <el-date-picker
          v-model="value4"
          type="date"
          placeholder="选择查询日期"
          :picker-options="pickerOptions"
          @change="handleDateChange"
        />
      </div>
    </div>
  </div>
  <el-dialog v-model="dialogVisible" title="查询数据" width="30%" draggable>
    <search :searchdata="searchdata" :formattedDate="formattedDate" />
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import search from "@/components/search.vue";
import { ref, watch } from "vue";
const value4 = ref("");
import axios from "axios";
import { ElMessage } from "element-plus";

import { BASE_URL } from "@/service/config/index";
let dialogVisible = ref(false);
let formattedDate = ref("");
let searchdata = ref([]);
const pickerOptions = {
  disabledDate(time) {
    const minimumDate = new Date("2023-01-01");
    return time.getTime() < minimumDate.getTime();
  },
};
// 监听日期选择事件
const handleDateChange = (value) => {
  value4.value = value;
  formattedDate.value = formatDateString(value);
  // console.log("选取的日期：", formattedDate.value);
  const url = BASE_URL + "/pastmonth/search";
  axios
    .post(
      url,
      { date: formattedDate.value },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log("请求成功：", response.data.data);
      if (response.data.data !== null) {
        console.log("limian选取的日期：", formattedDate.value);
        searchdata.value = [
          {
            label: "PM10",
            value: response.data.data.pm10,
          },
          {
            label: "PM2.5",
            value: response.data.data.pm25,
          },
          {
            label: "O3",
            value: response.data.data.o3,
          },
          {
            label: "CO",
            value: response.data.data.co,
          },
          {
            label: "NO2",
            value: response.data.data.no2,
          },
          {
            label: "SO2",
            value: response.data.data.so2,
          },
        ];
        dialogVisible.value = true;
      } else {
        ElMessage.error("请选择2021-06-01至2023-04-02的日期");
      }
    })
    .catch((error) => {
      // 请求失败的处理逻辑
      console.log("请求失败：", error);
    });
};
const formatDateString = (dateString) => {
  const dateObj = new Date(dateString);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 52%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 0 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .container {
  flex: 1;
  border-right: solid 1px var(--el-border-color);
}
.demo-date-picker .container .block {
  border-right: none;
}
.demo-date-picker .container:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: #1d1e1f;
  font-size: 12px;
  margin-bottom: 20px;
}
th,
td {
  font-size: 15px !important;
}
</style>
