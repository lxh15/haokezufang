import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: () => import('@/views/Home') // 首页
  },
  {
    path: '/search',
    component: () => import('@/views/Search') // 搜索
  },
  {
    path: '/info',
    component: () => import('@/views/Info') // 资讯
  },
  {
    path: '/my',
    component: () => import('@/views/My'), // 我的
    children: [
      {
        path: 'login',
        component: () => import('@/views/My/Login') // 引入login
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
