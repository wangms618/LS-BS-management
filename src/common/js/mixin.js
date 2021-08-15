import AddNotification from '@/components/Teacher/AddNotification'
import AddAssignment from '@/components/Teacher/AddAssignment'
import AddBooks from '@/components/Teacher/AddBooks'
import {
  MessageBox,
  Message
} from 'element-ui';
export const NoticeMixin = {
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {
    // 添加公告
    addNotification() {
      const submitTask = this.$createElement;
      MessageBox({
        title: "添加公告", // 标题
        closeOnClickModal: false, // 不可点击遮罩层取消，防止误触
        message: submitTask(AddNotification, {
          ref: "childMethod"
        }), // MessageBox 消息正文内容，这里需要调用子组件中的方法
        showCancelButton: true, // 是否显示取消按钮
        confirmButtonText: "发布公告", // 确定按钮的文本内容
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
              instance.confirmButtonText = "发布公告";
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
    // 修改公告
    changeNotification(row) {
      console.log(row);
      const submitTask = this.$createElement;
      MessageBox({
        title: "修改公告", // 标题
        closeOnClickModal: false, // 不可点击遮罩层取消，防止误触
        message: submitTask(AddNotification, {
          ref: "childMethod"
        }), // MessageBox 消息正文内容，这里需要调用子组件中的方法
        showCancelButton: true, // 是否显示取消按钮
        confirmButtonText: "修改公告", // 确定按钮的文本内容
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
              instance.confirmButtonText = "修改公告";
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
    // 删除公告
    deleteNotification(row) {
      console.log(row);
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

    // 添加任务
    addAssignment() {
      const submitTask = this.$createElement;
      MessageBox({
        title: "添加任务", // 标题
        closeOnClickModal: false, // 不可点击遮罩层取消，防止误触
        message: submitTask(AddAssignment, {
          ref: "childMethod"
        }), // MessageBox 消息正文内容，这里需要调用子组件中的方法
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

    // 修改任务
    // 将当前row传入子组件中
    // 利用vuex,点击修改时，将row传入vuex，AddAssignment组件里数据对应更新上vuex里的值
    changeAssignment(row) {
      // 修改vuex
      this.$store.commit('changeAssignment', row)
      const changeTask = this.$createElement;
      MessageBox({
        title: "修改任务", // 标题
        closeOnClickModal: false, // 不可点击遮罩层取消，防止误触
        message: changeTask(AddAssignment, {
          ref: "childMethod"
        }), // MessageBox 消息正文内容，这里需要调用子组件中的方法
        showCancelButton: true, // 是否显示取消按钮
        confirmButtonText: "提交修改", // 确定按钮的文本内容
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
              instance.confirmButtonText = "提交修改";
            }
          } else {
            // 点击退出
            done();
          }
        },
      }).then((res) => {
        console.log(res);
      });
    },

    // 删除任务
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


    // 添加书籍
    addBooks() {
      const submitTask = this.$createElement;
      MessageBox({
        title: "添加添加书籍", // 标题
        closeOnClickModal: false, // 不可点击遮罩层取消，防止误触
        message: submitTask(AddBooks, {
          ref: "childMethod"
        }), // MessageBox 消息正文内容，这里需要调用子组件中的方法
        showCancelButton: true, // 是否显示取消按钮
        confirmButtonText: "添加书籍", // 确定按钮的文本内容
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
              instance.confirmButtonText = "添加书籍";
            }
          } else {
            // 点击退出
            done();
          }
        },
      }).then(() => {
        this.Message({
          // 消息提示
          type: "success",
          message: "添加成功",
          duration: 2000,
        });
      });
    },

    // 修改书籍信息
    changeBooks() {
      const submitTask = this.$createElement;
      MessageBox({
        title: "修改书籍信息", // 标题
        closeOnClickModal: false, // 不可点击遮罩层取消，防止误触
        message: submitTask(AddBooks, {
          ref: "childMethod"
        }), // MessageBox 消息正文内容，这里需要调用子组件中的方法
        showCancelButton: true, // 是否显示取消按钮
        confirmButtonText: "修改", // 确定按钮的文本内容
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
              instance.confirmButtonText = "修改书籍";
            }
          } else {
            // 点击退出
            done();
          }
        },
      }).then(() => {
        this.Message({
          // 消息提示
          type: "success",
          message: "修改成功",
          duration: 2000,
        });
      });
    },

    // 删除书籍信息
    deleteBooks(id) {
      console.log(id);
      this.$confirm("确认删除?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "info",
        })
        .then(() => {
          // 这里放删除操作
          console.log("对应对象为：", id, "操作这个对象进行删除即可");
        })
        .catch(() => {
          Message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },

}