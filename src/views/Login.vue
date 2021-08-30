<template>
  <div class="container">
    <div class="welcome-words">
      <span>欢迎来到旅梦后台管理系统</span>
    </div>
    <div class="login-box">
      <span class="login-title">登录</span>
      <span class="toregister" @click="toRegister">点击这里注册账号</span>
      <div class="login-account">
        <img src="../assets/img/userlogo.png" alt="" />
        <el-input placeholder="登录账号" v-model="username"> </el-input>
      </div>
      <div class="login-password">
        <img src="../assets/img/passlogo.png" />
        <el-input
          placeholder="请输入密码"
          v-model="password"
          show-password
        ></el-input>
      </div>
      <el-button type="primary" round @click="login">登录</el-button>
      <div class="remember-title">
        <el-switch v-model="rememberpw"> </el-switch>
        <span class="remember-password">记住密码</span>
        <span class="forget-password">忘记密码</span>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../api/user";
import { Message } from "element-ui";
import role from "../common/js/roleType";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      username: "",
      password: "",
      rememberpw: false,
    };
  },
  methods: {
    toRegister() {
      this.$router.push("Home");
    },
    async login() {
      const res = await User.login(this.username, this.password);
      if (res) {
        if (res.code === 200) {
          // 登陆成功
          await Message.success(res.message);
          // 保存用户信息至Cookie中
          Cookies.set("user", JSON.stringify(res.data));
          // 保存信息到vuex中
          this.$store.commit("saveUserInfo", res.data);
          console.log(this.$store.state.user);
          if (res.data.role & role.STU) {
            // 学生页
            // student/home
            this.$router.push({ name: "StudentHome" });
          } else {
            // 教师页
            // home/teacher/
            this.$router.push({ name: "TeacherHome" });
          }
        } else if (res.code === 404) {
          Message.error(res.message);
        } else {
          Message.error(res.message || "未知错误");
        }
      }
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  .welcome-words {
    width: 100%;
    height: 100px;
    line-height: 100px;
    display: flex;
    span {
      margin: auto;
      font-size: 30px;
      font-weight: 600;
    }
  }
  .login-box {
    position: relative;
    margin: auto;
    width: 400px;
    height: 100%;
    background: #fff;
    .login-title {
      font-size: 26px;
      position: absolute;
      top: 80px;
      font-weight: 400;
    }
    .toregister {
      position: absolute;
      font-size: 14px;
      top: 110px;
      right: 10px;
      cursor: pointer;
    }
    .login-account {
      position: absolute;
      top: 140px;
      height: 50px;
      width: calc(100% - 6px);
      border: 3px solid #dbdbdb;
      border-radius: 40px;
      display: flex;
      img {
        width: 50px;
        height: 50px;
      }
      .el-input {
        height: 50px;
        line-height: 50px;
        width: 330px;
      }
    }
    .login-password {
      position: absolute;
      top: 220px;
      height: 50px;
      width: calc(100% - 6px);
      border: 3px solid #dbdbdb;
      border-radius: 40px;
      display: flex;
      img {
        width: 40px;
        height: 40px;
        margin: 5px;
      }
      .el-input {
        height: 50px;
        line-height: 50px;
        width: 330px;
      }
    }
    .el-button {
      position: absolute;
      top: 320px;
      width: 100%;
      left: 0;
      height: 40px;
    }
    .remember-title {
      position: absolute;
      top: 400px;
      width: 100%;
      .remember-password {
        margin-left: 20px;
      }
      .forget-password {
        float: right;
      }
    }
  }
}
</style>