import { createRouter, createWebHashHistory } from 'vue-router'
import { handleRouter } from './routerFun'
import { constantRoutes } from './default'
import type { App } from 'vue'
import { createRouterGuard } from './guard'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

export async function setupRouter(app: App) {
  app.use(router)
  createRouterGuard(router) //路由守卫
  await router.isReady() //路由是否挂载完成
}

export * from './routerFun'
