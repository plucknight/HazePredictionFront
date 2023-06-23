<template>
  <div id="tfhours"></div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { handleError } from "vue";
import { ref, onMounted, watch } from "vue";

export default {
  props: ["text"],
  setup(props) {
    const data = ref(props.text);

    onMounted(() => {
      echarts.use([
        TitleComponent,
        ToolboxComponent,
        TooltipComponent,
        GridComponent,
        LegendComponent,
        LineChart,
        CanvasRenderer,
        UniversalTransition,
      ]);

      var myChart = echarts.init(document.getElementById("tfhours"));

      let option = {
        textStyle: {
          color: "#222", // 标签字体颜色
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["SO2", "NO2", "CO", "O3", "PM2.5", "PM10"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: data.value.map((item) => item.date),
          axisLabel: {
            show: false, // 隐藏横坐标轴上的数字
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "SO2",
            type: "line",
            stack: "Total",
            data: data.value.map((item) => item.so2),
          },
          {
            name: "NO2",
            type: "line",
            stack: "Total",
            data: data.value.map((item) => item.no2),
          },
          {
            name: "CO",
            type: "line",
            stack: "Total",
            data: data.value.map((item) => item.co),
          },
          {
            name: "O3",
            type: "line",
            stack: "Total",
            data: data.value.map((item) => item.o3),
          },
          {
            name: "PM2.5",
            type: "line",
            stack: "Total",
            data: data.value.map((item) => item.pm25),
          },
          {
            name: "PM10",
            type: "line",
            stack: "Total",
            data: data.value.map((item) => item.pm10),
          },
        ],
      };
      myChart.setOption(option);
    });

    watch(
      () => props.text,
      (newValue) => {
        data.value = newValue;
      }
    );

    return {
      data,
    };
  },
};
</script>

<style scoped>
#tfhours {
  width: 500px;
  height: 300px;
}
</style>
