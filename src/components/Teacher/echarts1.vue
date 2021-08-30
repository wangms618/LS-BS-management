<!--
 * @Author: your name
 * @Date: 2021-08-16 08:27:49
 * @LastEditTime: 2021-08-16 08:44:32
 * @LastEditors: Please set LastEditors
 * @Description: 首页的左边图表 打卡到课人数
 * @FilePath: \lm-bs-management\src\components\Teacher\echarts1.vue
-->

<template>
  <div id="main_left" style="width: 600px; height: 340px"></div>
</template>

<script>
export default {
  mounted() {
    this.landClassAcreagea();
  },
  methods: {
    landClassAcreagea() {
      console.log("echarts", this.$echarts);

      /* 柱状图->左 */
      var myChart = this.$echarts.init(document.getElementById("main_left"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          // 鼠标移动柱状图是提示文字
          show: true,
        },
        // 横坐标
        xAxis: {
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLabel: {
            show: true,
            textStyle: {
              color: "rgb(65, 65, 65)",
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
              color: "rgb(65, 65, 65)",
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
              var colorList = ["#3d8bff"];
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
            type: "bar",
            barWidth: 20, // 设置柱的宽度
            data: [70, 65, 70, 68, 69, 10, 15],
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