<template>
  <div class="container">
    <div class="header">
      <i class="el-icon-s-custom" style="color: #ffd04b"></i>
      <span class="header-title">用户管理</span>
    </div>
    <div class="user-main">
      <div class="user-search">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="user-info">
        <el-table :data="tableData" style="width: 100%" height="500">
          <el-table-column fixed prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column fixed prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column fixed prop="address" label="地址"> </el-table-column>
        </el-table>
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
  .user-search {
    border-radius: 20px;
    overflow: hidden;
    box-sizing: border-box;
    background: #fff;
    .el-collapse {
      border-radius: 20px;
      margin: 0 20px;
    }
  }
  .user-info {
    padding: 20px;
    border-radius: 20px;
    margin-top: 20px;
    width: calc(100% - 40px);
    max-height: 500px;
    background: #fff;
    overflow: hidden;
  }
}
div::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
</style>