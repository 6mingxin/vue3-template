import { createPermissionGuard } from './permission'

/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router) {
  router.beforeEach(async (to, from, next) => {
    // 开始 loadingBar
    window.$loadingBar?.start()
    // 页面跳转权限处理
    await createPermissionGuard(to, from, next, router)
  })
  router.afterEach(to => {
    // 设置document title
    if (to.meta.title) window.document.title = to.meta.title
    // 结束 loadingBar
    window.$loadingBar?.finish()
  })
}
