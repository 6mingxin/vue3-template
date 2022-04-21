import { createRouter, createWebHashHistory } from 'vue-router'
import { handleRouter } from './routerFun'
import { constantRoutes } from './default'
import type { App } from 'vue'
import { createRouterGuard } from './guard'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
})

export async function setupRouter(app: App) {
  app.use(router)
  createRouterGuard(router) //路由守卫
  await router.isReady() //路由是否挂载完成
}

export default setupRouter
