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
      if (!this.form.companyName) {
        Message({
          message: "请输入公司名",
          type: "warning",
          duration: 2000,
        });
      } else if (!this.form.address) {
        Message({
          message: "请输入工作城市",
          type: "warning",
          duration: 2000,
        });
      } else if (!this.form.studentName) {
        Message({
          message: "请输入名字",
          type: "warning",
          duration: 2000,
        });
      } else if (!this.form.薪资) {
        Message({
          message: "请输入链接",
          type: "warning",
          duration: 2000,
        });
      } else if (!this.form.graduatedSchool) {
        Message({
          message: "请输入毕业院校",
          type: "warning",
          duration: 2000,
        });
      } else if (!this.form.contactDetails) {
        Message({
          message: "请输入电话",
          type: "warning",
          duration: 2000,
        });
      } else if (!this.form.weChat) {
        Message({
          message: "请输入微信",
          type: "warning",
          duration: 2000,
        });
      }
    },
    // 失去焦点检测输入框
    OnInput(e) {
      if (!e.target.value) {
        Message({
          message: "请输入",
          type: "warning",
          duration: 2000,
        });
      }
    },
  },
  computed: {
    Listen() {
      return store.state.salary;
    },
  },
  watch: {
    Listen(newVal) {
      console.log("监听数据改变", newVal);
      this.form.companyName = newVal.companyName;
      this.form.address = newVal.address;
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