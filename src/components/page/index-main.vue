<template>
  <div class="main">
    <div class="area wrapper_02">
      <div class="area-left">
        <div class="recommendd-section">
          <div class="header_type_02">
            <ul class="keywords">
              <li>
                <a class="item" href="#">更新时间:{{ date }}</a>
              </li>
              <li class="line"></li>
              <li class="line"></li>
              <li>
                <a class="item" href="#">湿度:{{ humidity }}</a>
              </li>
              <li class="line"></li>
              <li class="line"></li>
              <li>
                <a class="item" href="#">风向:{{ windDir }}</a>
              </li>
              <li class="line"></li>
              <li>
                <a class="item" href="#">风速:{{ windSpeed }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="disc-section">
          <div class="disc-section-left">
            <div class="content">
              <div class="inner">
                <div class="roller">
                  <div class="desc_AQI">
                    <p class="pp">
                      <span class="tib"> 杨凌区API:</span
                      >杨凌区实时空气质量指数(API)
                    </p>
                  </div>
                  <div class="yujing">
                    <div class="chengdu">
                      <p class="chnegdup">{{ aqi }}</p>
                    </div>
                    <div class="desc">
                      <p class="rank">{{ rank }}级污染</p>
                      <p>更新时间:{{ date }}</p>
                      <!-- <p>温度：11℃</p> -->
                    </div>
                    <div class="pic"></div>
                  </div>
                </div>
                <div class="advise">
                  <p class="pp">
                    <span class="tib"> 对健康的影响：</span
                    >空气重度污染对人危害有很多，可能会导致呼吸系统炎症患病率的增加，也可能会导致人体的健康受到影响，除此之外还可能会引发炎症和咳嗽咳痰症状的出现。
                  </p>
                  <p class="pp">
                    <span class="tib">建议措施：</span
                    >儿童、老年人及心脏病、呼吸系统疾病患者应避免长时间、高强度的户外锻炼。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="disc-section-right">
            <p class="pp">污染物空气质量分指数</p>
            <div class="datepic" id="dateaqi">
              <today v-if="todaydata.length" :todaydata="todaydata" />
            </div>
            <p class="jk">健康指引:</p>
            <p class="zt">{{ visibility }}</p>
          </div>
        </div>

        <div class="tips">
          <div class="title">未来七天空气质量预报</div>
          <ul class="tib">
            <li class="item">
              <div><h3 class="data">星期五</h3></div>
              <div class="wt"></div>
              <p class="dir">首要污染物：</p>
              <p class="date">{{ mainPollut }}</p>
              <p class="dir">污染级别：</p>
              <p class="date">{{ hazeLevel }}</p>
            </li>
            <li class="item">
              <div><h3 class="data">星期六</h3></div>
              <div class="wt"></div>
              <p class="dir">首要污染物：</p>
              <p class="date">{{ mainPollut }}</p>
              <p class="dir">污染级别：</p>
              <p class="date">{{ hazeLevel }}</p>
            </li>
            <li class="item">
              <div><h3 class="data">星期天</h3></div>
              <div class="wt"></div>
              <p class="dir">首要污染物：</p>
              <p class="date">{{ mainPollut }}</p>
              <p class="dir">污染级别：</p>
              <p class="date">{{ hazeLevel }}</p>
            </li>
            <li class="item">
              <div><h3 class="data">星期一</h3></div>
              <div class="wt"></div>
              <p class="dir">首要污染物：</p>
              <p class="date">{{ mainPollut }}</p>
              <p class="dir">污染级别：</p>
              <p class="date">{{ hazeLevel }}</p>
            </li>
            <li class="item">
              <div><h3 class="data">星期二</h3></div>
              <div class="wt"></div>
              <p class="dir">首要污染物</p>
              <p class="date">{{ mainPollut }}</p>
              <p class="dir">污染级别：</p>
              <p class="date">{{ hazeLevel }}</p>
            </li>
            <li class="item">
              <div><h3 class="data">星期三</h3></div>
              <div class="wt"></div>
              <p class="dir">首要污染物</p>
              <p class="date">{{ mainPollut }}</p>
              <p class="dir">污染级别：</p>
              <p class="date">{{ hazeLevel }}</p>
            </li>
            <li class="item">
              <div><h3 class="data">星期四</h3></div>
              <div class="wt"></div>
              <p class="dir">首要污染物</p>
              <p class="date">{{ mainPollut }}</p>
              <p class="dir">污染级别：</p>
              <p class="date">{{ hazeLevel }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="area-right">
        <div class="position">
          <el-tabs
            v-model="activeName"
            type="card"
            class="demo-tabs"
            @tab-click="handleClick"
          >
            <el-tab-pane label="24hours" name="first"
              ><tfhours v-if="text.length" :text="text"
            /></el-tab-pane>
            <el-tab-pane label="最近一个月" name="second">
              <pastmonth
                v-if="pastmonthdata.length"
                :pastmonthdata="pastmonthdata"
              />
            </el-tab-pane>
            <el-tab-pane label="Role" name="third">Role</el-tab-pane>
            <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
          </el-tabs>
          <!-- <ul class="gq">
              <li class="item">
                <button id="past24" @click="show_hour">过去24小时</button>
              </li>
               <li class="item">未来24小时</li> -->
          <!-- <li class="item"><button id="preweek">未来一周</button></li> -->
          <!-- <li class="item">过去30天</li> -->
          <!-- </ul> -->
          <!-- <div class="future_haze_forecast" id="forecast"></div> -->
          <div class="weekAPI" id="wkAPI">
            <weekAqi v-if="weekaqi.length" :weekaqi="weekaqi" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import tfhours from "../tfhours.vue";
import today from "../today.vue";
import weekAqi from "../weekAqi.vue";
import pastmonth from "../pastmonth.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

const text = ref([]);
const todaydata = ref([]);
const weekaqi = ref([]);
const pastmonthdata = ref([]);
const date = ref();
const aqi = ref();
const rank = ref();
const hazeLevel = ref();
const mainPollut = ref();
const humidity = ref();
const windSpeed = ref();
const visibility = ref();
const windDir = ref();
const so2 = ref();
const no2 = ref();
const co = ref();
const o3 = ref();
const pm2 = ref();
const pm10 = ref();
async function fetchData() {
  try {
    const baseUML = "";
    const res = await axios.get(baseUML + "/24hours");
    text.value = res.data.data;
    console.log("this.text", text.value);

    const pastTime = await axios.get(baseUML + "/pastmonth");
    pastmonthdata.value = pastTime.data.data;
    console.log("this.pastmonthdata", pastmonthdata.value);

    const realTime = await axios.get(baseUML + "/realtime");
    const a = realTime.data.data;
    todaydata.value.push(a[0].so2);
    todaydata.value.push(a[0].no2);
    todaydata.value.push(a[0].co);
    todaydata.value.push(a[0].o3);
    todaydata.value.push(a[0].pm2);
    todaydata.value.push(a[0].pm10);

    console.log("today.value", todaydata.value);

    date.value = realTime.data.data[0].date;
    aqi.value = realTime.data.data[0].aqi;
    hazeLevel.value = realTime.data.data[0].hazeLevel;
    mainPollut.value = realTime.data.data[0].mainPollut;

    humidity.value = realTime.data.data[0].humidity;
    windDir.value = realTime.data.data[0].windDir;
    windSpeed.value = realTime.data.data[0].windSpeed;
    console.log("sad", windDir.value);
    visibility.value = realTime.data.data[0].visibility;

    const weekAqi = await axios.get(baseUML + "/weekaqi");
    weekaqi.value = weekAqi.data.data;
  } catch (error) {
    console.error(error);
  }
}

const activeName = ref("first");

onMounted(fetchData);
</script>

<style scoped></style>
