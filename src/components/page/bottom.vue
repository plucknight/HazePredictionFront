<template>
  <div class="bottom">
    <div class="wrapper">
      <div class="copyright">
        <p>
          <a href="">Copyright2023咸阳市生态环境监测中心</a>
        </p>
        <p>您是本站的第<span id="sp">0</span>位访问者</p>
      </div>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from "@/service/config/index";
import axios from "axios";
const url = BASE_URL + "/article/incr";
axios
  .post(url, { id: 1 })
  .then((response) => {
    const incrementedValue = response.data;
    document.getElementById("sp").textContent = incrementedValue;
  })
  .catch((error) => {
    console.error(error);
  });
export default {};
</script>

<style scoped></style>
