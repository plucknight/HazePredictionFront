<template>
  <div id="today"></div>
</template>

<script>
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { ref, onMounted, watch } from "vue";
export default {
  props: ["todaydata"],
  setup(props) {
    const data = ref(props.todaydata);
    // console.log("data", data);
    onMounted(() => {
      echarts.use([
        TitleComponent,
        TooltipComponent,
        GridComponent,
        LegendComponent,
        BarChart,
        CanvasRenderer,
      ]);
      var myChart = echarts.init(document.getElementById("today"));
      // console.log("mychart", myChart);
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {},
        grid: {
          top: "5%",
          left: "10%",
          right: "10%",
          bottom: "10%",
          containLabel: true,
        },
        xAxis: {
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },

          type: "value",
        },
        yAxis: {
          type: "category",
          data: ["SO2", "NO2", "CO", "O3", "PM2.5", "PM10"],
        },
        series: [
          {
            type: "bar",
            data: data.value,
          },
        ],
      };

      myChart.setOption(option);
    });
    watch(
      () => props.todaydata,
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
#today {
  width: 130px;
  height: 200px;
}
</style>
