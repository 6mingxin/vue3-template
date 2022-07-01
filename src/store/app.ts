import { defineStore } from 'pinia'
import { getThemeSettings, getNaiveThemeOverrides, addThemeCssVarsToHtml } from '@/utils/common/helpers'

interface Apptate {
  /** 菜单栏折叠 */
  siderCollapse: boolean
  /** 是否应用暗黑主题 */
  inverted: boolean
  /** 主题颜色 */
  themeColor: string
  /** 主题颜色列表 */
  themeColorList: string[]
  /** 其他颜色 */
  otherColor: OtherColor
  /** 是否自定义info的颜色(默认取比主题色深一级的颜色) */
  isCustomizeInfoColor: boolean
  /** 系统设置的抽屉，是否开启 */
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

export const useAppStore = defineStore({
  id: 'app', // id必填，且需要唯一
  state: (): Apptate => {
    return {
      siderCollapse: false,
      inverted: false,
      ...getThemeSettings(),
    }
  },
  getters: {
    /** naiveUI的主题配置 */
    naiveThemeOverrides(state) {
      const overrides = getNaiveThemeOverrides({ primary: state.themeColor, ...state.otherColor })
      if (overrides.common) {
        addThemeCssVarsToHtml(overrides.common)
      }
      return overrides
    },
  },
  actions: {
    toggleSiderCollapse() {
      this.siderCollapse = !this.siderCollapse
    },
    changeDarkTheme() {
      this.inverted = !this.inverted
    },
    closeSettingDrawer() {
      this.settingDrawerVisible = false
    },
    toggleSettingdrawerVisible() {
      this.settingDrawerVisible = !this.settingDrawerVisible
    },
    /** 重置theme状态 */
    resetThemeStore() {
      this.$reset()
    },
    /** 设置系统主题颜色 */
    setThemeColor(themeColor: string) {
      this.themeColor = themeColor
    },
  },
})
