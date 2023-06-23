<template>
  <div class="header">
    <div class="top">
      <div class="topbar wrapper_01">
        <div class="bar-left">
          <div class="logo">
            <a class="titleA">咸阳空气质量</a>
          </div>
        </div>
        <div class="bar-right">
          <ul class="list">
            <li>
              <router-link to="/"><a class="item">首页</a> </router-link>
            </li>
            <li>
              <router-link to="/knowledge"
                ><a class="item">相关知识</a>
              </router-link>
            </li>
          </ul>
          <div class="demo-date-picker">
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="Pick a day"
                :size="size"
              />
            </div>
          </div>
          <div class="login">
            <router-link to="/login"><a>登录</a> </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
