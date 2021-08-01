<template>
  <el-row class="tac">
  <el-col >
    <el-menu
      router='true'
      default-active="/StudentData"
      class="el-menu-vertical-demo"
      background-color="#282E38"
      text-color="#fff"
      active-text-color="#f57d2d">
      
      <el-menu-item index="/StudentData">
        <i class="el-icon-s-home"></i>
      
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/StudentData">
        <i class="el-icon-s-claim"></i>
       <span slot="title">学生数据</span>
        
      </el-menu-item>
      <el-menu-item index="/StudentData">
        <i class="el-icon-s-custom"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/StudentData">
        <i class="el-icon-s-unfold"></i>
        <span slot="title">班级列表</span>
      </el-menu-item>
      <el-menu-item index="/StudentData">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">通知发布</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
export default {
}
</script>

<style lang="less">
.el-menu-item{
  width: 220px;
}
</style>