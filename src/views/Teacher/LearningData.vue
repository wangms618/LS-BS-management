<!--
 * @Author: lvEndBack-manager
 * @Date: 2021-08-06 10:43:14
 * @LastEditTime: 2021-08-06 14:05:05
 * @LastEditors: Please set LastEditors
 * @Description: 用户管理
    管理员：可以查看老师和不同班级学员信息 添加老师 学员信息，删除老师学员信息
    老师：查看不同老师信息
 * @FilePath: \lm-bs-management\src\views\Teacher\UserManagement.vue
-->

<template>
  <div class="container">
    <div class="header">
      <i class="el-icon-s-management" style="color: #ffd04b"></i>
      <span class="header-title">学习情况</span>
    </div>
    <div class="user-main">
      <search-box>
        <span slot="search-category">学生姓名</span>
      </search-box>
      <div class="user-info">
        <el-table :data="tableData" height="500">
          <el-table-column prop="date" label="班级" width="380">
          </el-table-column>
          <el-table-column prop="name" label="创建时间" width="380">
          </el-table-column>
          <el-table-column prop="address" label="人数" width="440">
          </el-table-column>
          <el-table-column prop="address" label="操作" width="430">
            <el-button class="detail">详情</el-button>
            <el-button class="detail">修改</el-button>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "@/components/Common/SearchBox.vue";
export default {
  components: {
    SearchBox,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.detail {
  color: #1d8ce0;
}
.header {
  .header-title {
    margin-left: 10px;
    font-weight: bold;
  }
}
.user-main {
  margin-top: 20px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  .user-info {
    padding: 20px;
    border-radius: 20px;
    margin-top: 20px;
    width: calc(100% - 40px);
    height: 500px;
    background: #fff;
    overflow: hidden;
  }
}
</style>