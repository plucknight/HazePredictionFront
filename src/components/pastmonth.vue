<template>
  <div id="pastmonth"></div>
</template>

<script>
import * as echarts from "echarts/core";
import { LabelLayout, UniversalTransition } from "echarts/features";
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
  props: ["pastmonthdata"],
  setup(props) {
    const data = ref(props.pastmonthdata);

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

      var myChart = echarts.init(document.getElementById("pastmonth"));

      let option = {
        textStyle: {
          color: "#222",
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
            show: false,
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
#pastmonth {
  width: 500px;
  height: 300px;
}
</style>
