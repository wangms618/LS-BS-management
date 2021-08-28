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
        width="100"
      ></el-table-column>
      <el-table-column prop="missionTitle" label="任务"></el-table-column>
      <el-table-column prop="pushDate" label="发布日期" width="150">
      </el-table-column>
      <el-table-column prop="sender" label="发布人" width="150">
      </el-table-column>
      <el-table-column prop="finishState" label="完成情况" width="150">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- 拿到对应行的对象 -->
          <el-button size="small" @click.stop="showAssignment(scope.row)"
            >详情</el-button
          >
          <!-- <el-button size="small" @click="dialogVisible = true">详情</el-button> -->
          <el-button
            v-if="scope.row.state"
            type="primary"
            size="small"
            @click.stop="clocking(scope.row)"
          >
            打卡
          </el-button>
          <el-button v-if="!scope.row.state" size="small" type="success" plain disabled
            >已打卡</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 点击详情弹出的窗口 -->
    <el-dialog
      title="任务详情"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-descriptions column="1" direction="vertical">
        <el-descriptions-item label="任务名" labelStyle="font-weight:1000">{{
          this.content.missionTitle
        }}</el-descriptions-item>
        <el-descriptions-item label="任务内容" labelStyle="font-weight:1000">{{
          this.content.missions
        }}</el-descriptions-item>
        <el-descriptions-item label="发布人" labelStyle="font-weight:1000"
          ><el-tag size="small">{{
            this.content.sender
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
import Clocking from "@/components/Student/Clocking";
import { MessageBox, Message } from "element-ui";
export default {
  methods: {
    // 选中事件
    handleCurrentChange(currentRow, oldCurrentRow) {
      console.log(currentRow, oldCurrentRow);
      console.log("handleCurrentChange");
      this.dialogVisible = true;
      this.content = currentRow;
    },
    // 展示详情
    showAssignment(row) {
      console.log(row);
      this.content = row;
      this.dialogVisible = true;
    },
    // 打卡
    clocking(row) {
      console.log(row);
      const submitTask = this.$createElement;
      MessageBox({
        title: "任务打卡",
        closeOnClickModal: false, // 不可点击遮罩层取消，防止误触
        message: submitTask(Clocking, {
          ref: "childMethod",
        }), // MessageBox 消息正文内容，这里需要调用子组件中的方法
        showCancelButton: true, // 是否显示取消按钮
        confirmButtonText: "打卡", // 确定按钮的文本内容
        cancelButtonText: "取消", // 取消按钮的文本内容
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            // 点击确定
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            if (this.$refs.childMethod.onSubmit()) {
              // 调用子组件的onSubmit方法，成功提交
              instance.confirmButtonLoading = false;
              done();
            } else {
              instance.confirmButtonLoading = false;
              instance.confirmButtonText = "打卡";
            }
          } else {
            // 点击退出
            done();
          }
        },
      }).then(() => {
        Message({
          // 消息提示
          type: "success",
          message: "添加成功",
          duration: 2000,
        });
      });
    },
    // 关闭详情消息框
    handleClose(done) {
      done();
    },
  },
  data() {
    return {
      tableData: [
        {
          code: 1,
          missionTitle: "力扣3道算法题",
          missions:
            "每日力扣3道算法题每日力扣3道算法题每日力扣3道算法题每日力扣3道算法题每日力扣3道算法题每日力扣3道算法题每日力扣3道算法题每日力扣3道算法题每日力扣3道算法题每日力扣3道算法题每日力扣3道算法题每日力扣3道算法题每日力扣3道算法题每日力扣3道算法题每日力扣3道算法题",
          pushDate: "2021/8/24/20:00",
          sender: "蜗牛",
          finishState: "未完成",
          state: false,
        },
        {
          code: 2,
          missionTitle: "面试题",
          missions: "每日力扣3道算法题",
          pushDate: "2021/8/24/20:00",
          sender: "蜗牛",
          finishState: "未完成",
          state: false,
        },
        {
          code: 3,
          missionTitle: "掘金文章",
          missions: "写一篇文章",
          pushDate: "2021/10/24/20:00",
          sender: "喻导",
          finishState: "完成",
          state: true,
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