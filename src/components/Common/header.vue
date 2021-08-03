<template>
  <div class="header">
    <div class="header-left">
      <i class="el-icon-s-fold"></i>
      <span>旅梦后台管理系统</span>
    </div>
    <div class="header-right">
      <div class="header-right_setting">
        <i class="el-icon-setting"></i>
      </div>
      <div class="header-right_notice">
        <i class="el-icon-message-solid"></i>
      </div>
      <div class="header-right_user">
        <el-dropdown>
          <div class="el-dropdown-link">
            <div class="header-user_img">
              <img
                src="https://img03.sogoucdn.com/app/a/100520093/ca86e620b9e623ff-f4709b64c5c0ee80-4767e89ad0a20b3e72a61fe4a89414f2.jpg"
              />
            </div>
            <div class="header-user_name"><span>名长不超过八个字</span></div>
            <div class="icon">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  .header-left {
    font-size: 18px;
    span {
      margin-left: 20px;
    }
  }
  .header-right {
    display: flex;
    width: 360px;
    .header-right_setting,
    .header-right_notice {
      width: 60px;
      height: 60px;
      .el-icon-setting,
      .el-icon-message-solid {
        cursor: pointer;
      }
    }
    .header-right_user {
      .el-dropdown-link {
        cursor: pointer;
        color: #000;
        display: flex;
        width: 200px;
        height: 60px;
        box-sizing: border-box;
        .header-user_img {
          width: 60px;
          height: 60px;
          display: flex;
          img {
            margin: auto;
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
        }
        .header-user_name {
          width: 120px;
        }
      }
      .el-icon-arrow-down {
        font-size: 12px;
      }
    }
  }
}
</style>