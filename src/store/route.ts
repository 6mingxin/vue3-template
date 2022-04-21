import type { Router } from 'vue-router'
import { defineStore } from 'pinia'
import { constantRoutes } from '@/router/dynamic-router'
import { handleRouter } from '@/router/routerFun'
// import { fetchUserRoutes } from '@/service'
import { getUserInfo } from '@/utils'
// import { useTabStore } from '../tab'

interface RouteState {
  /** 是否初始化了权限路由 */
  isInitedAuthRoute: boolean
  /** 路由首页name(前端静态路由时生效，后端动态路由该值会被后端返回的值覆盖) */
  routeHomeName: string
  /** 菜单 */
  menus: GlobalMenuOption[]
  /** 搜索的菜单 */
  searchMenus: Route[]
  /** 缓存的路由名称 */
  cacheRoutes: string[]
}

export const useRouteStore = defineStore('route-store', {
  state: (): RouteState => ({
    isInitedAuthRoute: false,
    routeHomeName: 'dashboard_analysis',
    menus: [],
    searchMenus: [],
    cacheRoutes: [],
  }),
  actions: {
    /**
     * 处理权限路由
     * @param routes - 权限路由
     * @param router - 路由实例
     */
    handleAuthRoutes(routes: Route[], router: Router) {
      // this.menus = transformAuthRouteToMenu(routes)
      // this.searchMenus = transformAuthRoutesToSearchMenus(routes)

      console.log(routes)
      const vueRoutes = handleRouter(routes)
      vueRoutes.forEach(route => {
        router.addRoute(route)
      })
      // this.cacheRoutes = getCacheRoutes(vueRoutes)
    },
    /**
     * 初始化动态路由
     * @param router - 路由实例
     */
    async initDynamicRoute(router: Router) {
      // const { userId } = getUserInfo()
      // const { data } = await fetchUserRoutes(userId)
      const data = constantRoutes
      console.log('initDynamicRoute', data)

      if (data) {
        this.handleAuthRoutes(data, router)
      }
    },
    /**
     * 初始化权限路由
     * @param router - 路由实例
     */
    async initAuthRoute(router: Router) {
      console.log('initAuthRoute')

      // const { initHomeTab } = useTabStore()
      // const { userId } = getUserInfo()
      // if (!userId) return false
      try {
        await this.initDynamicRoute(router)
      } catch (error) {
        return false
      }

      // initHomeTab(this.routeHomeName, router)
      this.isInitedAuthRoute = true
      return true
    },
  },
})
