<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <i class="el-icon-s-claim" style="color: #ffd04b"></i>
        <span class="header-title">发布管理</span>
      </div>
      <div class="header-right">
        <el-input placeholder="学员名称" v-model="input" clearable> </el-input>
      </div>
    </div>
    <div class="data-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页" name="home">首页内容</el-tab-pane>
        <el-tab-pane label="掘金文章" name="juejin">掘金文章</el-tab-pane>
        <el-tab-pane label="LeetCode" name="leetcode">LeetCode</el-tab-pane>
        <el-tab-pane label="GitHub" name="github">GitHub</el-tab-pane>
        <el-tab-pane label="赛事研学" name="events">赛事研学</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      // activeName跟随name
      activeName: "home",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab.$options.propsData, event);
      console.log(this.activeName);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-left {
    width: 200px;
    height: 30px;
    position: relative;
    .header-title {
      position: absolute;
      left: 20px;
      font-weight: bold;
    }
  }
  .header-right {
    padding-right: 20px;
    border-right: 1px solid #727070;
    .learn-data_search {
      height: 20px;
      border-radius: 20px;
      border: 1px solid #445cfc;
    }
  }
}
.data-content {
  width: calc(100% - 40px);
  background: #fff;
  height: 570px;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 10px;
}
</style>