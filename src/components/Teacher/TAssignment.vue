<template>
  <div class="container">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      height="450"
      highlight-current-row
      @current-change="handleCurrentChange"
    >
      <el-table-column
        prop="code"
        sortable
        label="编号"
        width="80"
      ></el-table-column>
      <el-table-column prop="plan" label="任务" width="180"></el-table-column>
      <el-table-column prop="name" label="发布者" width="180">
      </el-table-column>
      <el-table-column prop="pushDate" label="发布时间"> </el-table-column>
      <el-table-column prop="finishNum" label="已完成人数"> </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <!-- 拿到对应行的对象 -->
          <el-button size="small" @click.stop="changeAssignment(scope.row)"
            >修改</el-button
          >
          <el-button
            type="danger"
            size="small"
            @click.stop="deleteAssignment(scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="add-assignment">
      <el-button type="primary" size="medium" @click="addAssignment"
        >添加任务</el-button
      >
    </div>
    <!-- 点击详情弹出的窗口 -->
    <el-dialog
      title="任务详情"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-descriptions column="1" direction="vertical">
        <el-descriptions-item label="任务名" labelStyle="font-weight:1000">{{
          this.content.plan
        }}</el-descriptions-item>
        <el-descriptions-item label="任务内容" labelStyle="font-weight:1000">{{
          this.content.plan
        }}</el-descriptions-item>
        <el-descriptions-item label="发布人" labelStyle="font-weight:1000"
          ><el-tag size="small">{{
            this.content.name
          }}</el-tag></el-descriptions-item
        >
        <el-descriptions-item label="发布日期" labelStyle="font-weight:1000">{{
          this.content.pushDate
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
import { NoticeMixin } from "@/common/js/mixin.js";
export default {
  mixins: [NoticeMixin],
  methods: {
    // 选中事件
    handleCurrentChange(currentRow, oldCurrentRow) {
      console.log(currentRow, oldCurrentRow);
      console.log("handleCurrentChange");
      this.dialogVisible = true;
      this.content = currentRow;
    },
  },
  data() {
    return {
      tableData: [
        {
          code: 1,
          plan: "leetcode刷题1",
          name: "蜗牛",
          pushDate: "2016-05-02",
          finishNum: 18 + "人",
        },
        {
          code: 2,
          plan: "leetcode刷题2",
          name: "蜗牛",
          pushDate: "2016-05-02",
          finishNum: 18 + "人",
        },
        {
          code: 3,
          plan: "leetcode刷题3",
          name: "蜗牛",
          pushDate: "2016-05-02",
          finishNum: 18 + "人",
        },
        {
          code: 4,
          plan: "leetcode刷题4",
          name: "蜗牛",
          pushDate: "2016-05-02",
          finishNum: 18 + "人",
        },
        {
          code: 5,
          plan: "leetcode刷题5",
          name: "蜗牛",
          pushDate: "2016-05-02",
          finishNum: 18 + "人",
        },
        {
          code: 6,
          plan: "leetcode刷题",
          name: "蜗牛",
          pushDate: "2016-05-02",
          finishNum: 18 + "人",
        },
      ],
      dialogVisible: false,
      // 存放要查看的任务的详情
      content: "",
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 400px;
  .add-assignment {
    margin-top: 10px;
    .el-button {
      float: right;
    }
  }
}
</style>