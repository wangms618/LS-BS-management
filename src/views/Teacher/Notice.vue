<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <i class="el-icon-s-claim" style="color: #ffd04b"></i>
        <span class="header-title">通知管理</span>
      </div>
      <div class="header-right">
        <el-input placeholder="通知查询" v-model="input" clearable> </el-input>
      </div>
    </div>
    <div class="data-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="近期任务" name="assignment">
          <assignment></assignment>
        </el-tab-pane>
        <el-tab-pane label="书籍推荐" name="bookRecommend">
          <book-recommend></book-recommend>
        </el-tab-pane>
        <el-tab-pane label="公告" name="leetcode"><notification></notification></el-tab-pane>
        <el-tab-pane label="我发布的" name="github">我发布的</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Assignment from '@/components/Teacher/TAssignment'
import BookRecommend from '@/components/Teacher/TBookRecommend'
import Notification from '@/components/Teacher/TNotification'
export default {
  components:{
    Assignment,
    BookRecommend,
    Notification
  },
  data() {
    return {
      input: "",
      // activeName跟随name
      activeName: 'assignment',
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
  height: 550px;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 10px;
}
</style>