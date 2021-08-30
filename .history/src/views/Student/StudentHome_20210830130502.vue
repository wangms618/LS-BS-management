<!--
 * @Author: lvEndBack-manager
 * @Date: 2021-08-06 10:43:14
 * @LastEditTime: 2021-08-30 13:04:19
 * @LastEditors: Please set LastEditors
 * @Description: 展示用户主要信息
    老师，管理员：查看当前课时，班级数，学生人数    每周到课人数 和 打卡人数   最近打卡人信息
    学生：leetcode,github,掘金打卡  每周到课情况 每周打卡情况  最近打卡人信息
 * @FilePath: \lm-bs-management\src\views\Teacher\TeacherHome.vue
-->

<template>
  <div class="container">
    <div class="header">
      <i class="el-icon-s-home" style="color: #ffd04b"></i>
      <span class="header-title">首页</span>
    </div>
    <div class="top">
      <div class="top-left">
        <div>
          <!-- 头像 -->
          <el-avatar
            :size="90"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </div>
        <div class="user-info">
          <div class="user-name">蜗牛</div>
          <div class="login-info">登录状态：启动</div>
        </div>
      </div>
      <!-- 右边数据 -->
      <div class="top-right">
        <div class="right-content">
          <div class="right-ico">
            <div class="first">
              <i class="el-icon-s-management"></i>
            </div>
            <div class="first">leetcode打卡</div>
            <div class="count">100</div>
          </div>
          <div class="right-ico">
            <div class="first">
              <i class="el-icon-s-marketing"></i>
            </div>
            <div class="first">掘金打卡</div>
            <div class="count">200</div>
          </div>
          <div class="right-ico">
            <div class="first">
              <i class="el-icon-s-custom"></i>
            </div>
            <div class="first">学生数量</div>
            <div class="count">300</div>
          </div>
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="middle-left">
        <div class="middle-left-top">
          <i class="el-icon-aim" style="color: #1d8ce0"></i>
          <span style="margin-left: 10px">本周到课人数</span>
        </div>
        <div class="middle-left-middle">
          <span>三色班</span>
          <i class="el-icon-arrow-down"></i>
        </div>
        <div class="middle-left-bottom">
          <echarts1></echarts1>
        </div>
      </div>
      <div class="middle-right">
        <div class="middle-right-top">
          <i class="el-icon-aim" style="color: #1d8ce0"></i>
          <span style="margin-left: 10px">本周打卡人数</span>
        </div>
        <div class="middle-right-middle">
          <span>三色班</span>
          <i class="el-icon-arrow-down"></i>
        </div>
        <div class="middle-right-bottom">
          <echarts2></echarts2>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-top">
        <i class="el-icon-s-data" style="color: #1d8ce0"></i>
        <span style="margin-left: 10px">近期学习情况</span>
      </div>
      <div class="bottom-bottom">
        <el-table
          :data="
            tableData.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            )
          "
          style="width: 95%; margin: 10px auto"
          stripe
        >
          <el-table-column
            prop="studentName"
            label="姓名"
            align="center"
            width="180"
          >
          </el-table-column>

          <el-table-column
            prop="studentSex"
            align="center"
            label="性别"
            width="140"
          >
          </el-table-column>
          <el-table-column
            prop="schoolGrade"
            label="学校-年级"
            align="center"
            width="300"
          >
          </el-table-column>
          <el-table-column
            prop="studentLearning"
            align="center"
            label="学习情况"
            width="250"
          >
          </el-table-column>
          <el-table-column
            prop="submissionTime"
            align="center"
            label="提交时间"
            width="250"
          >
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                type="text"
                align="right"
                size="small"
                @click="handleClick(scope.row)"
                >详情</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="block" style="margin-top: 15px">
        <el-pagination
          align="center"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="tableData.length"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Studentdetails from "@/components/Teacher/StudentDetails";
import echarts1 from "@/components/Teacher/echarts1.vue";
import echarts2 from "@/components/Teacher/echarts2.vue";
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",

      // multipleSelection: [],
      tableData: [
        {
          studentName: "王小虎",
          studentSex: "男",
          schoolGrade: "东华理工大学-18级",
          studentLearning: "掘金打卡",
          submissionTime: "8.7 （17：19：05）",
        },
        {
          studentName: "王小虎",
          studentSex: "男",
          schoolGrade: "东华理工大学-18级",
          studentLearning: "掘金打卡",
          submissionTime: "8.7 （17：19：05）",
        },
        {
          studentName: "王小虎",
          studentSex: "男",
          schoolGrade: "东华理工大学-18级",
          studentLearning: "掘金打卡",
          submissionTime: "8.7 （17：19：05）",
        },
        {
          studentName: "王小虎",
          studentSex: "男",
          schoolGrade: "东华理工大学-18级",
          studentLearning: "掘金打卡",
          submissionTime: "8.7 （17：19：05）",
        },
        {
          studentName: "王小虎",
          studentSex: "男",
          schoolGrade: "东华理工大学-18级",
          studentLearning: "掘金打卡",
          submissionTime: "8.7 （17：19：05）",
        },
        {
          studentName: "王小虎",
          studentSex: "男",
          schoolGrade: "东华理工大学-18级",
          studentLearning: "掘金打卡",
          submissionTime: "8.7 （17：19：05）",
        },
        {
          studentName: "王小虎",
          studentSex: "男",
          schoolGrade: "东华理工大学-18级",
          studentLearning: "掘金打卡",
          submissionTime: "8.7 （17：19：05）",
        },
        {
          studentName: "王小虎",
          studentSex: "男",
          schoolGrade: "东华理工大学-18级",
          studentLearning: "掘金打卡",
          submissionTime: "8.7 （17：19：05）",
        },
        {
          studentName: "王小虎",
          studentSex: "男",
          schoolGrade: "东华理工大学-18级",
          studentLearning: "掘金打卡",
          submissionTime: "8.7 （17：19：05）",
        },
        {
          studentName: "王小虎",
          studentSex: "男",
          schoolGrade: "东华理工大学-18级",
          studentLearning: "掘金打卡",
          submissionTime: "8.7 （17：19：05）",
        },
      ],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 6, // 每页的数据条数
    };
  },
  components: {
    echarts1,
    echarts2,
  },
  methods: {
    //点击展现当前行信息
    handleClick(row) {
      console.log(row);
      const submitTask = this.$createElement;
      this.$msgbox({
        title: "近期详情",
        message: submitTask(Studentdetails, { ref: "childMethod" }),
      });
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  .header-title {
    margin-left: 10px;
    font-weight: bold;
  }
}

.text {
  text-align: center;
}
.container {
  width: 95%;
  margin: 0 auto;
  height: 100%;
}
.top {
  display: flex;
  height: 150px;
  background: #fff;
  color: #3d8bff;
  margin-top: 20px;
  border-radius: 10px;
}
.top-left {
  margin-left: 40px;
  margin-top: 20px;
  display: flex;
  flex: 4;
  height: 150px;
  .user-info {
    margin-top: 15px;
    margin-left: 20px;
    .user-name {
      letter-spacing: 10px;
      font-size: 20px;
      color: rgb(48, 47, 47);
    }
    .login-info {
      margin-top: 10px;
      letter-spacing: 2px;
      color: rgb(39, 39, 240);
    }
  }
}
.top-right {
  flex: 3;
  .right-content {
    height: 80%;
    display: flex;
    width: 80%;
    margin: 10px auto;
    border-left: 2px dashed rgb(223, 224, 230);
    .right-ico {
      text-align: center;
      margin-left: 50px;
      margin-top: 20px;

      .first {
        letter-spacing: 1px;
        height: 35px;
        width: 80px;
        font-size: 15px;
        color: rgb(48, 47, 47);
        flex: 1;
        .el-icon-s-management {
          color: rgb(88, 88, 241);
          font-size: 25px;
          line-height: 25px;
        }
        .el-icon-s-marketing {
          color: rgb(88, 88, 241);
          font-size: 25px;
          line-height: 25px;
        }
        .el-icon-s-custom {
          color: rgb(88, 88, 241);
          font-size: 25px;
          line-height: 25px;
        }
      }
      .count {
        font-size: 18px;
        color: blue;
      }
    }
  }
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
  // height: 380px;
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
    margin-top: -40px;
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
    margin-top: -40px;
  }
}
.bottom {
  height: 500px;
  background: #fff;
  border-radius: 20px;
  margin-top: 40px;
  padding-bottom: 30px;
  .bottom-top {
    height: 40px;
    border-bottom: 2px solid rgb(240, 242, 247);
    padding: 20px 0 0 20px;
    font-size: 18px;
  }
}
</style>