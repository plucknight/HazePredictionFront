import axios from "axios";
import { ElMessage } from "element-plus";
import { BASE_URL } from "../service/config/index.ts";
const Service = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json;",
  },
  time: 10000,
});

//请求拦截器
Service.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {};
  }

  if (!config.headers.common) {
    config.headers.common = {};
  }

  const token = window.sessionStorage.getItem("token");
  if (token !== null) {
    config.headers.common["Authorization"] = token;
  }
  return config;
});

//响应拦截器
Service.interceptors.response.use((response) => {
  const res = response.data;
  if (res.data !== null) {
    return res;
  } else {
    ElMessage.error("密码错误");
    return res;
  }
});
export default Service;
