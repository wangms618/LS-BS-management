// 后台首页
<template>
  <div>
    <el-container>
      <el-aside width="160px">
        <span>旅梦后台管理系统</span>
        <!-- <teacher-nav-menu></teacher-nav-menu> -->
        <student-nav-menu></student-nav-menu>
      </el-aside>
      <el-container>
        <el-header>
          <v-header></v-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import StudentNavMenu from '@/components/Student/StudentNavMenu'
// import TeacherNavMenu from "@/components/Teacher/TeacherNavMenu";
import VHeader from "@/components/Common/Header.vue";
export default {
  components: {
    // TeacherNavMenu,
    VHeader,
    StudentNavMenu,
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
  border-bottom: 1px solid #cdcfd3;
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
  height: 600px;
}
.el-main::-webkit-scrollbar {
  width: 0px;
}
</style>