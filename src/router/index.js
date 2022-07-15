import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/Home'), // 搜索
    children: [
      {
        path: 'search',
        component: () => import('@/views/Home/Search') // 搜索
      },
      {
        path: 'info',
        component: () => import('@/views/Home/info') // 资讯
      },
      {
        path: 'my',
        component: () => import('@/views/Home/My') // 我的
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login') // 登录 引入login
  },
  {
    path: '/favorites',
    component: () => import('@/views/Home/My/favorites') // 我的收藏
  }
]

const router = new VueRouter({
  routes
})

export default router
