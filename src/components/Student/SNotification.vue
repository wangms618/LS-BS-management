<template>
  <div class="container">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      height="450"
      @current-change="handleCurrentChange"
    >
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="content" label="内容" width="180">
      </el-table-column>
      <el-table-column prop="pushDate" label="发布日期"> </el-table-column>
      <el-table-column prop="pushBy" label="发布人"> </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <!-- 拿到对应行的对象 -->
          <el-button size="small" @click.stop="showNotification(scope.row)"
            >详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="公告详情"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-descriptions column="1" direction="vertical">
        <el-descriptions-item label="标题" labelStyle="font-weight:1000">{{
          this.content.title
        }}</el-descriptions-item>
        <el-descriptions-item label="公告内容" labelStyle="font-weight:1000">{{
          this.content.content
        }}</el-descriptions-item>
        <el-descriptions-item label="发布日期" labelStyle="font-weight:1000">{{
          this.content.pushDate
        }}</el-descriptions-item>
        <el-descriptions-item label="发布人" labelStyle="font-weight:1000">{{
          this.content.pushBy
        }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          title: "周日LOL1",
          content: "网吧五连坐",
          pushDate: "2021/8/7",
          pushBy: "王**",
        },
        {
          title: "周日LOL2",
          content: "网吧五连坐3",
          pushDate: "2021/8/7",
          pushBy: "刘**",
        },
        {
          title: "周日LOL3",
          content: "网吧五连坐1",
          pushDate: "2021/8/7",
          pushBy: "游**",
        },
        {
          title: "周日LOL4",
          content: "网吧五连坐4",
          pushDate: "2021/8/7",
          pushBy: "郭**",
        },
      ],
      dialogVisible: false,
      content: "",
    };
  },
  methods: {
    handleCurrentChange(currentRow, oldCurrentRow) {
      console.log(currentRow, oldCurrentRow);
      console.log("handleCurrentChange");
      this.dialogVisible = true;
      this.content = currentRow;
    },
    showNotification(row) {
      console.log(row);
      this.content = row;
      this.dialogVisible = true;
    },
    handleClose(done) {
      done();
    },
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