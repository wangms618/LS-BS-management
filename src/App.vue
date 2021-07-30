<template>
  <div id="app">
    <el-container>
      <el-aside width="220px">
        <span>旅梦后台管理系统</span>
        <teacher-nav-menu></teacher-nav-menu>
      </el-aside>
      <el-container>
        <el-header>主页</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import TeacherNavMenu from '@/components/Teacher/TeacherNavMenu'
export default {
  components: {
    TeacherNavMenu,
  },
  methods: {},
};
</script>
<style lang="less">
.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #282e38;
  height: 100vh;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #f0f2f7;
}
</style>
