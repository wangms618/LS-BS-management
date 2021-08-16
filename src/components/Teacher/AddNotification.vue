<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="公告内容">
        <el-input type="textarea" v-model="form.desc" rows="5"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import store from "@/store/index";
export default {
  data() {
    return {
      form:{
        title:store.state.notification.title,
        desc:store.state.notification.content
      }
    }
  },
  computed: {
    Listen() {
      return store.state.notification;
    },
  },
  watch: {
    Listen(newVal) {
      console.log("监听数据改变", newVal);
      this.form.title = newVal.title; 
      this.form.link = newVal.content;
    },
  },
}
</script>

<style lang="less">
.el-message-box {
  width: 800px;
}
</style>