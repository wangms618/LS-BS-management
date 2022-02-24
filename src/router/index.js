import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/Home',
    component: () => import('@/views/Home.vue'),
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
    //调试学生页面时开启
    // children: [
    //   {
    //     path: '/StudentNotice',
    //     name: "StudentNotice",
    //     component: () => import('@/views/Student/Notice.vue'),
    //   },
    //   {
    //     path: '/StudentHome',
    //     name: "StudentHome",
    //     component: () => import('@/views/Student/StudentHome.vue'),
    //   },
    //   {
    //     path: '/StudentData',
    //     name: "StudentData",
    //     component: () => import('@/views/Student/StudentData.vue'),
    //   }
    // ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
