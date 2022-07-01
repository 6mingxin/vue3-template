/** 主题相关类型 */
declare namespace Theme {
  /** 主题配置 */
  interface Setting {
    /** 主题颜色 */
    themeColor: string
    /** 主题颜色列表 */
    themeColorList: string[]
    /** 其他颜色 */
    otherColor: OtherColor
    /** 是否自定义info的颜色(默认取比主题色深一级的颜色) */
    isCustomizeInfoColor: boolean
    settingDrawerVisible: boolean
  }

  /** 其他主题颜色 */
  interface OtherColor {
    /** 信息 */
    info: string
    /** 成功 */
    success: string
    /** 警告 */
    warning: string
    /** 错误 */
    error: string
  }
}

/** 多页签Tab的路由 */
interface GlobalTabRoute extends Pick<import('vue-router').RouteLocationNormalizedLoaded, 'name' | 'path' | 'meta'> {
  /** 滚动的位置 */
  scrollPosition: {
    left: number
    top: number
  }
}
