<template>
  <div class="register">
    <div class="main">
      <div class="header">旅梦学员信息注册</div>
      <div class="step-wrap">
        <el-steps :active="index" finish-status="success">
          <el-step title="账号注册" icon="el-icon-edit"></el-step>
          <el-step title="信息填写" icon="el-icon-upload"></el-step>
          <el-step
            title="完成注册"
            icon="el-icon-success"
            :status="registerSuccess ? 'success' : 'wait'"
          ></el-step>
        </el-steps>
      </div>
      <el-carousel
        :autoplay="false"
        :arrow="'never'"
        indicator-position="none"
        :pause-on-hover="false"
        :loop="false"
        :height="index == 1 ? '440px' : '200px'"
        :initial-index="0"
        ref="formPage"
      >
        <el-carousel-item class="userinfo">
          <div class="form-wrap">
            <el-form
              size="mini"
              ref="userinfoForm"
              :model="userinfoForm"
              :rules="userRules"
              label-width="100px"
              status-icon
            >
              <el-form-item
                label="用户名"
                prop="username"
                class="username info-item"
              >
                <el-input
                  v-model="userinfoForm.username"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="密码"
                prop="password"
                class="password info-item"
              >
                <el-input
                  v-model="userinfoForm.password"
                  type="password"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="重复密码"
                prop="rePassword"
                class="re-password info-item"
              >
                <el-input
                  v-model="userinfoForm.rePassword"
                  type="password"
                  autocomplete="off"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="注册码"
                prop="registerCode"
                class="register-code"
              >
                <el-input v-model="userinfoForm.registerCode"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-carousel-item>
        <el-carousel-item class="detailinfo">
          <div class="form-wrap">
            <el-form
              size="mini"
              label-width="100px"
              ref="detailinfoForm"
              :model="detailinfoForm"
              :rules="detailRules"
            >
              <el-form-item label="真实姓名" prop="name" class="name info-item">
                <el-input v-model="detailinfoForm.name"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-select
                  placeholder="请选择性别"
                  v-model="detailinfoForm.sex"
                >
                  <el-option label="男" value="男"></el-option>
                  <el-option label="女" value="女"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="班级" prop="ClassId">
                <el-select
                  placeholder="班级"
                  v-model="detailinfoForm.ClassId"
                  :disabled="classList.length == 0"
                >
                  <el-option
                    v-for="Class in classList"
                    :key="Class.id"
                    :label="Class.classname"
                    :value="Class.id"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="年级" prop="grade">
                <el-select
                  placeholder="请选择年级"
                  v-model="detailinfoForm.grade"
                >
                  <el-option
                    v-for="grade in gradeList"
                    :key="grade"
                    :label="grade"
                    :value="grade"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="学校" prop="school" class="name info-item">
                <el-input v-model="detailinfoForm.school"></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="tel" class="name info-item">
                <el-input v-model="detailinfoForm.tel"></el-input>
              </el-form-item>
              <el-form-item
                label="电子邮箱"
                prop="email"
                class="name info-item"
              >
                <el-input v-model="detailinfoForm.email"></el-input>
              </el-form-item>
              <el-form-item label="QQ" prop="qq" class="name info-item">
                <el-input v-model="detailinfoForm.qq"></el-input>
              </el-form-item>
              <el-form-item label="家庭住址" prop="addr" class="name info-item">
                <el-input v-model="detailinfoForm.addr"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-carousel-item>
        <el-carousel-item class="register-result">
          <div class="register-result-wrap">
            <el-col :sm="12" :lg="20" v-if="registerSuccess">
              <el-result
                icon="success"
                title="注册成功"
                subTitle="点击下方按钮前往登录页"
              >
                <template slot="extra">
                  <el-button type="primary" size="medium" @click="toLogin"
                    >去登录</el-button
                  >
                </template>
              </el-result>
            </el-col>
            <el-col :sm="12" :lg="20" v-else>
              <el-result icon="fail" title="注册失败" subTitle="请联系管理员">
                <template slot="extra">
                  <el-button type="primary" size="medium" @click="back"
                    >返回</el-button
                  >
                </template>
              </el-result>
            </el-col>
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="btn-wrap">
        <el-button v-show="index == 1" size="mini" plain @click="pre"
          >上一步</el-button
        >
        <el-button
          :loading="btnLoading"
          v-show="index <= 1"
          type="primary"
          size="mini"
          @click="next"
          >{{ index == 1 ? "提交" : "下一步" }}</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import User from "@/api/user.js";
import Class from "@/api/class.js";
export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.userinfoForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkUsername = async (rule, value, callback) => {
      const res = await User.checkUsername(value);
      if (res) {
        callback(new Error("用户名已被注册"));
      } else {
        callback();
      }
    };
    return {
      index: 0,
      finalStatus: "wait",
      userinfoForm: {
        username: "",
        password: "",
        rePassword: "",
        registerCode: "",
      },
      userRules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
          {
            type: "string",
            pattern: /^[a-zA-Z0-9_-]{3,16}$/,
            message: "用户名只能包含数字、字母、-、_,长度3-16",
            trigger: "blur",
          },
          {
            validator: checkUsername,
            trigger: "blur",
            message: "用户名已被注册",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
          {
            type: "string",
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
            message: "密码必须同时包含大小写字母和数字,长度8-16",
            trigger: "blur",
          },
        ],
        rePassword: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
          {
            type: "string",
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
            message: "密码必须同时包含大小写字母和数字,长度8-16",
            trigger: "blur",
          },
          {
            validator: validatePass2,
            message: "两次输入密码不一致",
            trigger: "blur",
          },
        ],
        registerCode: [
          { required: true, message: "注册码不能为空", trigger: "blur" },
        ],
      },
      detailinfoForm: {
        name: "",
        sex: "",
        ClassId: "",
        grade: "",
        school: "",
        addr: "",
        email: "",
        tel: "",
      },
      detailRules: {
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
        sex: [{ required: true, message: "性别不能为空", trigger: "change" }],
        ClassId: [
          { required: true, message: "班级不能为空", trigger: "change" },
        ],
        grade: [{ required: true, message: "年级不能为空", trigger: "change" }],
        tel: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            type: "string",
            pattern: /^1[3-9]\d{9}$/,
            message: "手机号格式不正确",
            trigger: "blur",
          },
        ],
        email: [
          {
            type: "string",
            pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
            message: "邮箱格式不正确",
            trigger: "blur",
          },
        ],
      },
      classList: [
        {
          id: "1",
          classname: "火山班",
        },
        {
          id: "2",
          classname: "三色班",
        },
        {
          id: "3",
          classname: "京喜班",
        },
      ],
      gradeList: [],
      registerSuccess: false,
      btnLoading: false,
    };
  },
  created() {
    this.initGradeList();
    this.initClassList();
  },
  methods: {
    pre() {
      this.$refs.formPage.prev();
      this.index--;
    },
    next() {
      if (this.index == 0) {
        this.btnLoading = true;
        // 用户名校验
        this.$refs.userinfoForm.validate((valid) => {
          if (valid) {
            this.btnLoading = false;
            this.$refs.formPage.next();
            this.index++;
          }
        });
      } else if (this.index == 1) {
        this.btnLoading = true;
        this.$refs.detailinfoForm.validate(async (valid) => {
          if (valid) {
            // 表单校验通过
            let userinfo = this.userinfoForm;
            delete userinfo.rePassword;
            let detailinfo = this.detailinfoForm;
            const registerInfo = Object.assign(userinfo, detailinfo);
            // 提交用户信息
            const res = await User.register(registerInfo);
            if (res.code == 200) {
              // 注册成功
              this.$refs.formPage.next();
              this.index++;
              this.btnLoading = false;
              this.registerSuccess = true;
            }
          }
        });
      }
    },
    initGradeList() {
      const curYear = new Date().getFullYear();
      this.gradeList.push(curYear);
      for (let i = 1; i <= 5; i++) {
        this.gradeList.unshift(curYear - i);
      }
      for (let i = 1; i <= 5; i++) {
        this.gradeList.push(curYear + i);
      }
      console.log(this.gradeList);
    },
    async initClassList() {
      const classList = await Class.getClassList(true);
      console.log(classList);
      this.classList = [...classList];
    },
    toLogin() {
      this.$router.push({ path: "/Login" });
    },
    back() {
      this.pre();
      this.pre();
      this.registerSuccess = false
    },
  },
};
</script>

<style lang="less">
.register {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    width: 40%;
    height: 88%;
    padding: 10px;
    .header {
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 28px;
      font-weight: bold;
      color: #409eff;
      margin-bottom: 10px;
    }
    .step-wrap {
      width: 100%;
      height: 50px;
      margin-bottom: 20px;
      .el-steps {
        height: 12px;
        .el-step {
          .el-step__head {
            .el-step__icon {
              i {
                font-size: 18px;
              }
            }
            .el-step__line {
              height: 1px;
            }
          }
          .el-step__main {
            .el-step__title {
              font-size: 12px;
            }
          }
        }
      }
    }
    .form-wrap {
      overflow: scroll-y;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;

      .el-input {
        width: 200px;
      }
      .register-code {
        .el-input {
          width: 100px;
        }
      }
    }
    .detailinfo {
      overflow-y: auto;
    }
    .register-result {
      height: 100%;
      width: 100%;
      .register-result-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
      }
    }
    .btn-wrap {
      height: 30px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      box-sizing: border-box;
      padding: 0 20px;
    }
  }
}
</style>