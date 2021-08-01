import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:"Home",
    component:()=>import('@/views/Teacher/TeacherHome.vue')
  },
  {
    path: '/StudentData',
    name: "StudentData",
    component: () => import('@/views/Student/StudentData.vue'),
    // meta:{
    //   index:2
    // }

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
