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
        <el-menu-item index="/StudentData">
          <i class="el-icon-s-custom"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/StudentData">
          <i class="el-icon-s-unfold"></i>
          <span slot="title">就业信息</span>
        </el-menu-item>
        <el-menu-item index="StudentNotice">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">通知打卡</span>
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
    this.activeItem = window.location.pathname.slice(1);
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