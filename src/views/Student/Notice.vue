<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <i class="el-icon-s-claim" style="color: #ffd04b"></i>
        <span class="header-title">通知打卡</span>
      </div>
      <div class="header-right">
        <el-input placeholder="通知查询" v-model="input" clearable> </el-input>
      </div>
    </div>
    <div class="data-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="近期任务" name="assignment">
          <student-Assignment></student-Assignment>
        </el-tab-pane>
        <el-tab-pane label="书籍推荐" name="bookRecommend">
          <student-book-recommend></student-book-recommend>  
        </el-tab-pane>
        <el-tab-pane label="公告" name="notification"> 
          <student-notification></student-notification>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import StudentBookRecommend from '@/components/Student/SBookRecommend'
import StudentAssignment from '@/components/Student/SAssignment'
import StudentNotification from '@/components/Student/SNotification'
export default {
  components:{
    // 学生任务
    StudentAssignment,
    // 学生书籍推荐
    StudentBookRecommend,
    // 公告
    StudentNotification
  },
  data() {
    return {
      input: "",
      // activeName跟随name
      activeName: "assignment",
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