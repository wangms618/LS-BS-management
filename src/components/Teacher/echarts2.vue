<!--
 * @Author: your name
 * @Date: 2021-08-16 08:27:58
 * @LastEditTime: 2021-08-16 08:45:25
 * @LastEditors: Please set LastEditors
 * @Description: 首页的右边图表 本周打卡人数
 * @FilePath: \lm-bs-management\src\components\Teacher\echarts2.vue
-->

<template>
  <div id="main_right" style="width: 600px; height: 340px"></div>
</template>

<script>
export default {
  mounted() {
    this.landClassAcreageaTwo();
  },
  methods: {
    landClassAcreageaTwo() {
      console.log("echarts", this.$echarts);

      /* 线状图->右 */
      var myChart = this.$echarts.init(document.getElementById("main_right"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          // 鼠标移动柱状图是提示文字
          show: true,
        },
        legend: {
          // data: ['面积'],
          textStyle: {
            fontSize: 12,
          },
        },
        // 横坐标
        xAxis: {
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLabel: {
            show: true,
            textStyle: {
              color: "#000",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#094060",
            },
          },
        },
        // 纵坐标
        yAxis: {
          // 设置坐标轴字体颜色
          axisLine: {
            lineStyle: {
              color: "#094060",
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#000",
            },
          },
        },
        //配置样式
        itemStyle: {
          //通常情况下：
          normal: {
            //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
            color: function (params) {
              var colorList = ["#3482f8"];
              return colorList[params.dataIndex % colorList.length];
            },
          },
          //鼠标悬停时：
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        series: [
          {
            // name: '面积',
            type: "line",
            barWidth: 20, // 设置柱的宽度
            data: [40, 58, 68, 69, 58, 62, 59],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表
      myChart.setOption(option);
    },
  },
};
</script>

<style>
</style>