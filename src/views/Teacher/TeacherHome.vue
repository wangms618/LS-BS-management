<template>
  <div class="container">
    <!-- <v-student-menu></v-student-menu>> -->
    <div>
      <i class="el-icon-s-home"></i>
      <span>首页</span>
    </div>
    <div class="top">
      <div class="top-left">
        <div class="avatar">
          <img src="" alt="" />
        </div>
        <div class="user-info">
          <div class="user-name">蜗牛</div>
          <div class="login-info">
            <p>登录名：fifi_girl</p>
            <p>登录状态：启动</p>
          </div>
          <div>
            <i class="el-icon-time"></i>
            <p>操作日志</p>
          </div>
        </div>
      </div>
      <div class="top-right">
        <div class="first">111</div>
        <div class="first">222</div>
        <div class="first">333</div>
      </div>
    </div>
    <div class="middle">
      <div class="middle-left">
        <div class="middle-left-top">
          <i class="el-icon-aim"></i>
          <span>本周到课人数</span>
        </div>
      </div>
      <div class="middle-right">
        <div class="middle-right-top">
          <i class="el-icon-aim"></i>
          <span>本周打卡人数</span>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
//  import StudentNavMenu from "../../components/Student/StudentNavMenu.vue"
// export default {
//  components:{
//    "v-student-menu":StudentNavMenu
//    }
// };
</script>

<style lang="less" scoped>
.el-icon-s-home {
  color: red;
}
.el-icon-time {
  color: #1d8ce0;
}
.el-icon-aim{
  color: #1d8ce0;
}
.container {
  width: 95%;
  margin: 0 auto;
  height: 100%;
}
.top {
  // position: relative;
  display: flex;
  height: 150px;
  background: #fff;
  margin-top: 20px;
  border-radius: 10px;
}
.top-left {
  display: flex;
  height: 150px;
  width: 60%;
}
.top-right {
  flex: 1;
  display: flex;
  border-left: 2px dashed rgb(240, 242, 247);
}
.first {
  text-align: center;
  line-height: 150px;
  flex: 1;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
}
.middle {
  margin-top: 40px;
  height: 380px;
  display: flex;
  justify-content: space-between;
}
.middle-left {
  border-radius: 20px;
  background: #fff;
  height: 380px;
  width: 48%;
  .middle-left-top {
    height: 40px;
    border-bottom: 2px solid rgb(240, 242, 247);
    padding: 20px 0 0 20px;
    font-size: 18px;
  }
}
.middle-right {
  border-radius: 20px;
  background: #fff;
  height: 380px;
  width: 48%;
  .middle-right-top {
    height: 40px;
    border-bottom: 2px solid rgb(240, 242, 247);
    padding: 20px 0 0 20px;
    font-size: 18px;
  }
}
.bottom {
  height: 500px;
  background: #fff;
  border-radius: 20px;
  margin-top: 20px;
}
</style>