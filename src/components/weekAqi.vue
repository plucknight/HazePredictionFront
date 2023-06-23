<template>
  <div id="weekAqi"></div>
</template>

<script>
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { onMounted } from "vue";
import { ref, watch } from "vue";
export default {
  props: ["weekaqi"],
  setup(props) {
    const data = ref(props.weekaqi);
    console.log("aqidata", data);
    onMounted(() => {
      echarts.use([GridComponent, BarChart, CanvasRenderer]);
      var chartDom = document.getElementById("weekAqi");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        textStyle: {
          color: "#222", // 标签字体颜色
        },
        xAxis: {
          type: "category",
          data: data.value.map((item) => item.date),
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
          nameTextStyle: {
            color: ["#000"],
          },
        },
        series: [
          {
            data: data.value.map((item) => item.aqi),
            type: "bar",
          },
        ],
      };
      myChart.setOption(option);
    });
    watch(
      () => props.weekaqi,
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
#weekAqi {
  width: 540px;
  height: 300px;
}
</style>
