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
          <el-button size="small" @click.stop="changeAssignment(scope.row)">修改</el-button>
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
  </div>
</template>

<script>
import AddAssignment from "@/components/Teacher/AddAssignment";
import { MessageBox,Message } from 'element-ui';
export default {
  methods: {
    // 添加
    addAssignment() {
      const submitTask = this.$createElement;
      MessageBox({
        title: "添加任务", // 标题
        closeOnClickModal: false, // 不可点击遮罩层取消，防止误触
        message: submitTask(AddAssignment, { ref: "childMethod" }), // MessageBox 消息正文内容，这里需要调用子组件中的方法
        showCancelButton: true, // 是否显示取消按钮
        confirmButtonText: "发布任务", // 确定按钮的文本内容
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
              instance.confirmButtonText = "发布任务";
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
        this.tableData.push({
          // 添加数据
          code: 8,
          plan: "leetcode刷题123",
          name: "蜗牛123",
          pushDate: "2016-05-02",
          finishNum: 181 + "人",
        });
      });
    },

    // 修改
    // 将当前row传入子组件中
    // 利用vuex,点击修改时，将row传入vuex，AddAssignment组件里数据对应更新上vuex里的值
    changeAssignment(row) {
      this.$store.commit('onChange',row)
      const changeTask = this.$createElement;
      MessageBox({
        title: "修改任务", // 标题
        closeOnClickModal: false, // 不可点击遮罩层取消，防止误触
        message: changeTask(AddAssignment, { ref: "childMethod"}), // MessageBox 消息正文内容，这里需要调用子组件中的方法
        showCancelButton: true, // 是否显示取消按钮
        confirmButtonText: "提交修改", // 确定按钮的文本内容
        cancelButtonText: "取消", // 取消按钮的文本内容
        beforeClose: (action, instance, done) => {
          this.$refs.childMethod.onChange(row)
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
              instance.confirmButtonText = "提交修改";
            }
          } else {
            // 点击退出
            done();
          }
        },
      }).then(() => {
      });
    },

    // 删除
    deleteAssignment(row) {
      this.$confirm("确认删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "info",
      })
        .then(() => {
          // 这里放删除操作
          console.log("对应对象为：", row, "操作这个对象进行删除即可");
        })
        .catch(() => {
          Message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    // 选中事件
    handleCurrentChange(currentRow, oldCurrentRow) {
      console.log(currentRow, oldCurrentRow);
      console.log("handleCurrentChange");
    },

    // 添加修改
  },
  data() {
    return {
      tableData: [
        {
          code: 1,
          plan: "leetcode刷题",
          name: "蜗牛",
          pushDate: "2016-05-02",
          finishNum: 18 + "人",
        },
        {
          code: 2,
          plan: "leetcode刷题",
          name: "蜗牛",
          pushDate: "2016-05-02",
          finishNum: 18 + "人",
        },
        {
          code: 3,
          plan: "leetcode刷题",
          name: "蜗牛",
          pushDate: "2016-05-02",
          finishNum: 18 + "人",
        },
        {
          code: 4,
          plan: "leetcode刷题",
          name: "蜗牛",
          pushDate: "2016-05-02",
          finishNum: 18 + "人",
        },
        {
          code: 5,
          plan: "leetcode刷题",
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