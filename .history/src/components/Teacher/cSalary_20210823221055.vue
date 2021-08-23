<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="公司">
        <el-input v-model="form.companyName" @blur="OnInput($event)"></el-input>
      </el-form-item>
      <el-form-item label="城市">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="名字">
        <el-input v-model="form.studentName"></el-input>
      </el-form-item>
      <el-form-item label="薪资">
        <el-input v-model="form.salary"></el-input>
      </el-form-item>
      <el-form-item label="毕业学校">
        <el-input v-model="form.graduatedSchool"></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="form.contactDetails"></el-input>
      </el-form-item>
      <el-form-item label="微信">
        <el-input v-model="form.weChat"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Message } from "element-ui";
import store from "@/store/index";
export default {
  mounted() {
    // console.log(store.state.books.links, 123);
  },
  data() {
    return {
      form: {
        title: store.state.books.name,
        author: store.state.books.author,
        links: store.state.books.links,
        companyName: store.state.books.name,
        address: store.state.salary.address,
        studentName: store.state.salary.studentName,
        salary: store.state.salary.salary,
        graduatedSchool: store.state.salary.graduatedSchool,
        contactDetails: store.state.salary.contactDetails,
        weChat: store.state.salary.weChat,
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