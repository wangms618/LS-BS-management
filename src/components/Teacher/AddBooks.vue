<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="封面上传">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture"
          :auto-upload="false"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item>
      <el-form-item label="书名">
        <el-input v-model="form.title" @blur="OnInput($event)"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item label="链接">
        <el-input
          type="textarea"
          v-model="form.link"
          placeholder='请输入对应格式，例:"https://xxxxx" '
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Message } from "element-ui";
import store from "@/store/index";
export default {
  data() {
    return {
      form: {
        title: store.state.books.name,
        link: store.state.books.link,
      },
    };
  },
  methods: {
    onSubmit() {
      if (!this.form.title) {
        Message({
          message: "请输入书名",
          type: "warning",
          duration: 2000,
        });
      } else if (!this.form.author) {
        Message({
          message: "请输入作者",
          type: "warning",
          duration: 2000,
        });
      } else if (!this.form.link) {
        Message({
          message: "请输入链接",
          type: "warning",
          duration: 2000,
        });
      } else {
        let pattern = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;
        if (pattern.test(this.form.link)) {
          this.form.title = "";
          this.form.author = "";
          this.form.link = "";
          return true;
        } else {
          Message({
            message: "请输入正确的链接",
            type: "warning",
            duration: 2000,
          });
        }
      }
    },
    // 失去焦点检测输入框
    OnInput(e) {
      if (!e.target.value) {
        Message({
          message: "请输入书名",
          type: "warning",
          duration: 2000,
        });
      }
    },
  },
  computed: {
    Listen() {
      return store.state.books;
    },
  },
  watch: {
    Listen(newVal) {
      console.log("监听数据改变", newVal);
      this.form.title = newVal.name; 
      this.form.link = newVal.link;
    },
  },
};
</script>

<style lang="less">
.el-message-box {
  width: 800px;
}
</style>