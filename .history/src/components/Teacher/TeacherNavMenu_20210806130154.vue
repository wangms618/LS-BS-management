<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        router="true"
        :default-active="activeItem"
        class="el-menu-vertical-demo"
        background-color="#282E38"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="TeacherHome">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>

        <el-menu-item index="UserManagement">
          <i class="el-icon-s-custom"></i>
          <span slot="title">学员情况</span>
        </el-menu-item>
        <el-menu-item index="LearningData">
          <i class="el-icon-s-claim"></i>
          <span slot="title">发布管理</span>
        </el-menu-item>
        <el-menu-item index="ClassList">
          <i class="el-icon-s-unfold"></i>
          <span slot="title">班级列表</span>
        </el-menu-item>
        <el-menu-item index="CourseManagement">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">课程管理</span>
        </el-menu-item>
        <el-menu-item index="Employed">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">已经就业</span>
        </el-menu-item>
        <el-menu-item index="Notice">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">通知发布</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeItem: "TeacherHome",
    };
  },
};
</script>

<style lang="less">
.el-menu-item {
  width: 160px;
}
</style>