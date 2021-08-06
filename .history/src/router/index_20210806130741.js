import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Login',
  },
  {
    path: '/Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/Home',
    component: () => import('@/views/Home.vue'),
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
        path: '/Employed',
        name: 'Employed',
        component: () => import('@/views/Teacher/Employed.vue')
      },
    ]
  },


  // {
  //   path: '/StudentData',
  //   name: "StudentData",
  //   component: () => import('@/views/Student/StudentData.vue'),
  //   // meta:{
  //   //   index:2
  //   // }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
