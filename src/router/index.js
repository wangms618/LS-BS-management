import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'
import role from "@/common/js/roleType.js";
import Cookies from 'js-cookie'

Vue.use(VueRouter)

const isLogin = function () {
  let user = Cookies.get('user')
  console.log("isLogin",user);
  if (user) {
    return JSON.parse(user)
  } else {
    return false
  }
}

const routes = [
  {
    path: '/',
    redirect: '/Login',
  },
  {
    path: '/register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  // 学生路由
  {
    path: '/Student',
    name: 'Student',
    component: () => import('@/views/Student/index.vue'),
    children: [
      {
        path: 'Home',
        name: 'StudentHome',
        component: () => import('@/views/Student/StudentHome.vue')
      },
      {
        path: 'StudentNotice',
        name: "StudentNotice",
        component: () => import('@/views/Student/Notice.vue'),
      }
    ]
  },
  // 老师路由
  {
    path: '/Teacher',
    name: 'Teacher',
    component: () => import('@/views/Teacher/index.vue'),
    children: [
      {
        path: 'Home',
        name: 'TeacherHome',
        component: () => import('@/views/Teacher/TeacherHome.vue')
      },
      {
        path: 'LearningData',
        name: 'LearningData',
        component: () => import('@/views/Teacher/LearningData.vue')
      },
      {
        path: 'UserManagement',
        name: 'UserManagement',
        component: () => import('@/views/Teacher/UserManagement.vue')
      },
      {
        path: 'ClassList',
        name: 'ClassList',
        component: () => import('@/views/Teacher/ClassList.vue')
      },
      {
        path: 'CourseManagement',
        name: 'CourseManagement',
        component: () => import('@/views/Teacher/CourseManagement.vue')
      },
      {
        path: 'Employed',
        name: 'Employed',
        component: () => import('@/views/Teacher/Employed.vue')
      },
      {
        path: 'Notice',
        name: 'Notice',
        component: () => import('@/views/Teacher/Notice.vue')
      },
    ]
  },
  {
    path: '/Home',
    name: 'Home',
    // component: () => import('@/views/Home.vue'),
    // redirect: '/StudentNotice', // 调试学生页面时开启
    redirect: '/TeacherHome',
    children: [
      {
        path: '/TeacherHome',
        name: 'TeacherHome',
        component: () => import('@/views/Teacher/TeacherHome.vue')
      },
      {
        path: '/LearningData',
        name: 'LearningData',
        component: () => import('@/views/Teacher/LearningData.vue')
      },
      {
        path: '/UserManagement',
        name: 'UserManagement',
        component: () => import('@/views/Teacher/UserManagement.vue')
      },
      {
        path: '/ClassList',
        name: 'ClassList',
        component: () => import('@/views/Teacher/ClassList.vue')
      },
      {
        path: '/CourseManagement',
        name: 'CourseManagement',
        component: () => import('@/views/Teacher/CourseManagement.vue')
      },
      {
        path: '/Employed',
        name: 'Employed',
        component: () => import('@/views/Teacher/Employed.vue')
      },
      {
        path: '/Notice',
        name: 'Notice',
        component: () => import('@/views/Teacher/Notice.vue')
      },
    ]
    // 调试学生页面时开启
    // children: [
    // {
    //   path: '/StudentNotice',
    //   name: "StudentNotice",
    //   component: () => import('@/views/Student/Notice.vue'),
    // }
    // ]
  },

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.name);
  if (to.name === 'Login') {
    // 登录状态下登录页自动跳转到首页
    const loginInfo = isLogin()
    console.log(loginInfo);
    if (loginInfo) {
      if (loginInfo.role & role.STU) {
        next({ name: "StudentHome" })
      } else {
        next({ name: 'TeacherHome' })
      }
    } else {
      next()
    }
  } else {
    const loginInfo = isLogin()
    if (loginInfo) {
      // 已经登录
      if (loginInfo.role & role.STU) {
        // 登录角色为学生
        if (to.path.startsWith('/Teacher')) {
          Message.warning('权限不足，无法访问')
          next({ name: "StudentHome" })
        } else {
          next()
        }
      } else {
        // 登录角色为老师或则管理员
        if (to.path.startsWith('/Student')) {
          Message.warning("当前账号为老师账号！")
          next({ name: "TeacherHome" })
        } else {
          next()
        }
      }
    } else {
      // 未登录
      Message.error('未登录！请先登录')
      next({ name: 'Login' })
    }
  }
})

export default router
