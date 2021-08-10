<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="任务名称">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="任务描述">
        <el-input type="textarea" v-model="form.desc" rows="5"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Message } from "element-ui";
export default {
  data() {
    return {
      form: {
        title: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      if (!this.form.title) {
        Message({
          message: "请输入任务名称",
          type: "warning",
          duration: 2000,
        });
      } else if (!this.form.desc) {
        Message({
          message: "请输入任务描述",
          type: "warning",
          duration: 2000,
        });
      } else {
        this.form.title = '',
        this.form.desc = ''
        return true;
      }
    },
  },
};
</script>

<style lang="less">
.el-message-box {
  width: 800px;
}
</style>