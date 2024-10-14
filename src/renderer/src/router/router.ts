import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 定义路由
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/about',
    component: () => import('../pages/About.vue')
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
