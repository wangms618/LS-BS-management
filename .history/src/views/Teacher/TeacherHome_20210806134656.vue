<!--
 * @Author: lvEndBack-manager
 * @Date: 2021-08-06 10:43:14
 * @LastEditTime: 2021-08-06 13:46:56
 * @LastEditors: Please set LastEditors
 * @Description: 展示用户主要信息
    老师，管理员：查看当前课时，班级数，学生人数    
 * @FilePath: \lm-bs-management\src\views\Teacher\TeacherHome.vue
-->

<template>
  <div class="container">
    <!-- <v-student-menu></v-student-menu>> -->
    <div>
      <i class="el-icon-s-home"></i>
      <span>首页</span>
    </div>
    <div class="top">
      <div class="top-left">
        <div class="avatar">
          <img src="" alt="" />
        </div>
        <div class="user-info">
          <div class="user-name">蜗牛</div>
          <div class="login-info">
            <p>登录名：fifi_girl</p>
            <p>登录状态：启动</p>
          </div>
          <div>
            <i class="el-icon-time"></i>
            <p>操作日志</p>
          </div>
        </div>
      </div>
      <div class="top-right">
        <div class="first">
          <div class="box1"></div>
        </div>
        <div class="first">222</div>
        <div class="first">333</div>
      </div>
    </div>
    <div class="middle">
      <div class="middle-left">
        <div class="middle-left-top">
          <i class="el-icon-aim"></i>
          <span>本周到课人数</span>
        </div>
        <div class="middle-left-middle">
          <span>三色班</span>
          <i class="el-icon-arrow-down"></i>
        </div>
        <div class="middle-left-bottom">
          <div id="main_left" style="width: 635px; height: 300px"></div>
        </div>
      </div>
      <div class="middle-right">
        <div class="middle-right-top">
          <i class="el-icon-aim"></i>
          <span>本周打卡人数</span>
        </div>
        <div class="middle-right-middle">
          <span>三色班</span>
          <i class="el-icon-arrow-down"></i>
        </div>
        <div class="middle-right-bottom">
          <div id="main_right" style="width: 635px; height: 300px"></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-top">
        <i class="el-icon-s-data"></i>
        <span>学习情况</span>
        <span>全部</span>
      </div>
      <div class="bottom-bottom">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="name" label="姓名" width="245">
          </el-table-column>
          <el-table-column label="日期" width="240">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>

          <el-table-column prop="school" label="学校" width="275">
          </el-table-column>
          <el-table-column prop="grade" label="年级" width="255">
          </el-table-column>
          <el-table-column prop="tel" label="联系方式(qq/wx)" width="245">
          </el-table-column>
          <el-table-column prop="operate" label="操作" width="265">
            <el-button class="detail">详情</el-button>
            <el-button class="detail">修改</el-button>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection([tableData[1], tableData[2]])"
            >切换第二、第三行的选中状态</el-button
          >
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          school: "东华理工大学",
          grade: "大二年级",
          tel: "12344556677",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          school: "东华理工大学",
          grade: "大三年级",
          tel: "12344556677",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          school: "东华理工大学",
          grade: "大二年级",
          tel: "12344556677",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          school: "东华理工大学",
          grade: "大三年级",
          tel: "12344556677",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          school: "江西财经大学",
          grade: "大二年级",
          tel: "12344556677",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          school: "江西科技师范大学",
          grade: "大四年级",
          tel: "12344556677",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          school: "江西科技师范大学",
          grade: "大二年级",
          tel: "12344556677",
        },
      ],
      multipleSelection: [],
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    landClassAcreagea() {
      console.log("echarts", this.$echarts);

      /* 柱状图->左 */
      var myChart = this.$echarts.init(document.getElementById("main_left"));
      // 指定图表的配置项和数据
      var option = {
        title: {
          textStyle: {
            fontWeight: "normal",
            color: "#000", // 标题颜色
            fontSize: 14,
          },
        },
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
          splitLine: {
            lineStyle: {
              color: ["#07405c"],
            },
          },
        },
        //配置样式
        itemStyle: {
          //通常情况下：
          normal: {
            //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
            color: function (params) {
              var colorList = ["#0166ff"];
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
            barWidth: 13, // 设置柱的宽度
            data: [70, 65, 70, 68, 69, 10, 15],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表
      myChart.setOption(option);
    },
    landClassAcreageaTwo() {
      console.log("echarts", this.$echarts);

      /* 柱状图->左 */
      var myChart = this.$echarts.init(document.getElementById("main_right"));
      // 指定图表的配置项和数据
      var option = {
        title: {
          textStyle: {
            fontWeight: "normal",
            color: "#000", // 标题颜色
            fontSize: 14,
          },
        },
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
          splitLine: {
            lineStyle: {
              color: ["#07405c"],
            },
          },
        },
        //配置样式
        itemStyle: {
          //通常情况下：
          normal: {
            //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
            color: function (params) {
              var colorList = ["#0166ff"];
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
            barWidth: 13, // 设置柱的宽度
            data: [40, 58, 68, 69, 58, 62, 59],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表
      myChart.setOption(option);
    },
  },
  mounted() {
    this.landClassAcreagea();
    this.landClassAcreageaTwo();
  },
};
</script>
<style lang="less" scoped>
.el-icon-s-home {
  color: red;
}
.el-icon-time {
  color: #1d8ce0;
}
.el-icon-aim {
  color: #1d8ce0;
}
.el-icon-s-data {
  color: #1d8ce0;
}
.detail {
  color: #1d8ce0;
}
.text {
  text-align: center;
}
// .el-table .cell{
//   text-align: center;
// }
.container {
  width: 95%;
  margin: 0 auto;
  height: 100%;
}
.top {
  // position: relative;
  display: flex;
  height: 150px;
  background: #fff;
  margin-top: 20px;
  border-radius: 10px;
}
.top-left {
  display: flex;
  height: 150px;
  width: 60%;
}
.top-right {
  flex: 1;
  display: flex;
  border-left: 2px dashed rgb(240, 242, 247);
}
.first {
  border: 1px solid black;
  display: flex;
  text-align: center;
  line-height: 150px;
  flex: 1;
  .box1 {
    width: 60px;
    height: 60px;
    margin: 20px auto;
    border-radius: 50%;
    background: rgb(240, 242, 247);
    border: 1px solid black;
  }
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
}
.middle {
  margin-top: 40px;
  height: 380px;
  display: flex;
  justify-content: space-between;
}
.middle-left {
  border-radius: 20px;
  background: #fff;
  height: 380px;
  width: 48%;
  .middle-left-top {
    height: 40px;
    border-bottom: 2px solid rgb(240, 242, 247);
    padding: 20px 0 0 20px;
    font-size: 18px;
  }
  .middle-left-middle {
    height: 40px;
    padding: 10px 0 0 20px;
  }
  .middle-left-bottom {
    height: 270px;
    padding-left: 40px;
  }
}
.middle-right {
  border-radius: 20px;
  background: #fff;
  height: 380px;
  width: 48%;
  .middle-right-top {
    height: 40px;
    border-bottom: 2px solid rgb(240, 242, 247);
    padding: 20px 0 0 20px;
    font-size: 18px;
  }
  .middle-right-middle {
    height: 40px;
    padding: 10px 0 0 20px;
  }
  .middle-right-bottom {
    height: 270px;
    padding-left: 40px;
  }
}
.bottom {
  height: 500px;
  background: #fff;
  border-radius: 20px;
  margin-top: 40px;
  .bottom-top {
    height: 40px;
    height: 40px;
    border-bottom: 2px solid rgb(240, 242, 247);
    padding: 20px 0 0 20px;
    font-size: 18px;
  }
}
</style>