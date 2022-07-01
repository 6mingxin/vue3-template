import { setLocal, getLocal } from './local'

/** 缓存多页签数据 */
export function setTabRoutes(data: GlobalTabRoute[]) {
  setLocal('tab-routes', data)
}

/** 获取缓存的多页签数据 */
export function getTabRoutes() {
  const routes: GlobalTabRoute[] = []
  const data = getLocal<GlobalTabRoute[]>('tab-routes')
  if (data) {
    const defaultTabRoutes = data.map(item => ({
      ...item,
      scrollPosition: {
        left: 0,
        top: 0,
      },
    }))
    routes.push(...defaultTabRoutes)
  }
  return routes
}

/** 清空多页签数据 */
export function clearTabRoutes() {
  setTabRoutes([])
}
