<template>
  <div class="body">
    <div class="login-container">
      <h1 class="title">陕西省咸阳市雾霾监测预警平台</h1>
      <el-form
        :model="account"
        class="login-form"
        :rules="accountRules"
        label-width="60px"
        size="large"
      >
        <el-form-item label="账号:" prop="username">
          <el-input v-model="account.username" />
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input show-password v-model="account.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
          <span style="padding: 0 10px"></span>
          <router-link to="/"> <el-button>返回</el-button></router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import axios from "axios";
import { reactive, ref } from "vue";
import loginApi from "../api/login.js";
import { BASE_URL } from "../service/config/index";
import { ElMessage } from "element-plus";
const account = reactive({
  username: "",
  password: "",
});
const accountRules = {
  username: [
    { required: true, message: "必须输入帐号信息~", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: "必须是6~20数字或字母组成~",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "必须输入密码信息~", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "必须是3位以上数字或字母组成",
      trigger: "blur",
    },
  ],
};
const submitForm = () => {
  loginApi(account)
    .then((res) => {
      if (res.data !== null) {
        const storedToken = window.sessionStorage.getItem("token");
        const token = res.data;
        if (storedToken !== token) {
          if (token !== null) {
            window.sessionStorage.setItem("token", token);
            ElMessage.success("登录成功");
            router.push("/admin");
          } else {
            ElMessage.error("管理员后台管理：账号或密码错误");
          }
        } else {
          ElMessage.success("登录成功");
          router.push("/admin");
        }
      }
    })
    .catch((error) => {
      console.log("请求失败：", error);
    });
};
</script>

<style scoped>
.body {
  background-image: linear-gradient(#96bff8, #3f75bf);
}
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.title {
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.el-alert {
  margin: 0px 0 0;
}
</style>
