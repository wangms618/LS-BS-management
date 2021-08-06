<template>
  <div class="container">
    <div class="top">
      <i class="el-icon-document" style="color: #ffd04b"></i>
    <span class="top-title">课程管理</span>
    </div>
    <div class="header">
      <search-box>
        <span slot="search-category">课程名称</span>
      </search-box>
    </div>
    <div class="main">
      <el-tabs type="border-card" >
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import SearchBox from "@/components/Common/SearchBox.vue";
export default {
  components: {
    SearchBox,
  },
};
</script>

<style lang="less" scoped>
.top {
  .top-title {
    margin-left: 10px;
    font-weight: bold;
  }
}
.header{
  margin-top: 20px;
}
.main{
  margin-top: 40px;
}
</style>