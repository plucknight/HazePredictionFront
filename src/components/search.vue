<template>
  <div id="search"></div>
</template>

<script>
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { onMounted, toRefs } from "vue";
import { ref, watch } from "vue";

echarts.use([GridComponent, BarChart, CanvasRenderer]);

export default {
  props: ["searchdata", "formattedDate"],
  setup(props) {
    const { searchdata, formattedDate } = toRefs(props);
    const sdata = ref(searchdata.value);
    const sdate = ref(formattedDate.value);
    // console.log("aaa", formattedDate.value);
    // console.log("aaa", sdate.value);

    let myChart = null;

    const initializeChart = () => {
      if (myChart) {
        myChart.dispose();
      }
      const chartDom = document.getElementById("search");
      myChart = echarts.init(chartDom);

      let option = {
        textStyle: {
          color: "#222",
        },
        title: {
          text: sdate.value,
        },
        xAxis: {
          type: "category",
          data: ["SO2", "NO2", "CO", "O3", "PM2.5", "PM10"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: sdata.value,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
            label: {
              show: true,
              position: "top",
            },
          },
        ],
      };

      myChart.setOption(option);
    };

    onMounted(() => {
      if (document.readyState === "complete") {
        initializeChart();
      } else {
        window.addEventListener("load", initializeChart);
      }
    });

    watch(
      [searchdata, formattedDate],
      ([searchDataValue, formattedDateValue]) => {
        sdata.value = searchDataValue;
        sdate.value = formattedDateValue;
        initializeChart();
      },
      { deep: true }
    );
  },
};
</script>

<style scoped>
#search {
  width: 450px;
  height: 270px;
}
</style>
