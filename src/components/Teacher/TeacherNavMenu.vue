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
        <el-menu-item index="LearningData">
          <i class="el-icon-s-custom"></i>
          <span slot="title">学员情况</span>
        </el-menu-item>
        <el-menu-item index="Notice">
          <i class="el-icon-s-claim"></i>
          <span slot="title">发布管理</span>
        </el-menu-item>
        <el-menu-item index="Employed">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">已经就业</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeItem: "",
    };
  },
  mounted() {
    // console.log(window.location.pathname);
    this.activeItem = (window.location.pathname).slice(1);
  },
};
</script>

<style lang="less">
.el-menu-item {
  height: 100px;
  line-height: 100px;
  width: 160px;
}
</style>