<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="书名">
        <el-input v-model="form.title" @blur="OnInput($event)"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item label="链接">
        <el-input
          type="textarea"
          v-model="form.links"
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
  mounted() {
    console.log(store.state.books.links, 123);
  },
  data() {
    return {
      form: {
        title: store.state.books.name,
        author: store.state.books.author,
        links: store.state.books.links,
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
      } else if (!this.form.links) {
        Message({
          message: "请输入链接",
          type: "warning",
          duration: 2000,
        });
      } else {
        let pattern = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;
        if (pattern.test(this.form.links)) {
          this.form.title = "";
          this.form.author = "";
          this.form.links = "";
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
      this.form.links = newVal.links;
      this.form.author = newVal.author;
    },
  },
};
</script>

<style lang="less">
.el-message-box {
  width: 800px;
}
</style>