<template>
  <div id="main"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
// import theme from "./assets/theme/macarons.json";


const init = () => {
  // echarts.registerTheme('macarons', theme);
  const chartDom = document.getElementById('main');
  const myEcharts = echarts.init(chartDom, null, {
    width: 800,
    height: 600
  });
  myEcharts.setOption({
    title: {
      text: "Stacked Line",
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    toolbox: {
      feature: {
        magicType: { type: ['line', 'bar'] },
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210],
        areaStyle: {},
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310],
        areaStyle: {},
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410],
        areaStyle: {},
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320],
        areaStyle: {},
        emphasis: {
        focus: 'series'
      },
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        areaStyle: {},
        emphasis: {
        focus: 'series'
      },
      }
    ],
  });
}


onMounted(() => {
  init();
})
</script>

<style scoped></style>
