<template>
  <div class="container">
    <el-table :data="tableData" stripe style="width: 100%" height="450">
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="content" label="内容" width="180">
      </el-table-column>
      <el-table-column prop="pushDate" label="发布日期"> </el-table-column>
      <el-table-column prop="pushBy" label="发布人"> </el-table-column>
    </el-table>
    <div class="add-notice">
      <el-button type="primary" size="medium" >添加公告</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          title: "周日LOL",
          content: "网吧五连坐",
          pushDate: "2021/8/7",
          pushBy: "王**",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 500px;
  .add-notice {
    margin-top: 10px;
    .el-button {
      float: right;
    }
  }
}
</style>