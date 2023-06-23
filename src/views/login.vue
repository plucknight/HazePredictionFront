<template>
  <div class="body">
    <div class="login-container">
      <h1 class="title">陕西省咸阳市雾霾监测预警平台</h1>
      <form @submit.prevent="login" class="login-form" ref="formRef">
        <el-form-item label="账号:">
          <el-input v-model="formLabelAlign.name" />
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="formLabelAlign.region" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(fromRef)"
            >登录</el-button
          >
          <span style="padding: 0 10px"></span>
          <router-link to="/"> <el-button>返回</el-button></router-link>
        </el-form-item>
      </form>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { reactive, ref } from "vue";

const formLabelAlign = reactive({
  name: "",
  region: "",
  type: "",
});
const fromRef = ref();
const submitForm = (fromRef) => {
  router.push("/admin");
  // if (!fromRef) router.go("/");
  // fromRef.resetForm((valid) => {});
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
</style>
