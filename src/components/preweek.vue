<template>
  <div id="preweek"></div>
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
  props: ["preweek"],
  setup(props) {
    const data = ref(props.preweek);
    console.log(data.value);
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

      var myChart = echarts.init(document.getElementById("preweek"));

      let option = {
        textStyle: {
          color: "#222",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["PM2.5"],
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
          data: data.value.map((item) => item.time),
          //   axisLabel: {
          //     show: false,
          //   },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "PM2.5",
            type: "line",
            stack: "Total",
            data: data.value.map((item) => item.pm25),
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
#preweek {
  width: 500px;
  height: 300px;
}
</style>
