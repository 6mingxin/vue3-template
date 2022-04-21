/** 菜单项配置 */
type GlobalMenuOption = {
  key: string
  label: string
  routeName: string
  routePath: string
  icon?: () => import('vue').VNodeChild
  children?: GlobalMenuOption[]
}

/** 面包屑 */
type GlobalBreadcrumb = import('naive-ui').DropdownOption & {
  key: string
  label: string
  disabled: boolean
  routeName: string
  hasChildren: boolean
  children?: GlobalBreadcrumb[]
}

/** 单个路由的类型结构(动态路由模式：后端返回此类型结构的路由) */
interface Route {
  /** 路由名称(路由唯一标识) */
  name: string
  /** 路由路径 */
  path: string
  /** 路由重定向 */
  redirect?: string
  /**
   * 路由组件
   * - basic: 基础布局，具有公共部分的布局
   * - blank: 空白布局
   * - multi: 多级路由布局(三级路由或三级以上时，除第一级路由和最后一级路由，其余的采用该布局)
   * - self: 作为子路由，使用自身的布局(作为最后一级路由，没有子路由)
   */
  component?: (() => Promise<any>) | string
  /** 子路由 */
  children?: Route[]
  /** 路由描述 */
  meta: RouteMeta
  /** 路由属性 */
  props?: boolean | Record<string, any> | ((to: any) => Record<string, any>)
}
/** 路由描述 */
type RouteMeta = {
  /** 路由标题(可用来作document.title或者菜单的名称) */
  title: string
  /** 需要登录权限 */
  requiresAuth?: boolean
  /** 缓存页面 */
  keepAlive?: boolean
  /** 菜单和面包屑对应的图标 */
  icon?: string
  /** 是否在菜单中隐藏 */
  hide?: boolean
  /** 外链链接 */
  href?: string | URL | undefined
  /** 路由顺序，可用于菜单的排序 */
  order?: number
}
