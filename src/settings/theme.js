// import { EnumThemeLayoutMode, EnumThemeTabMode, EnumThemeHorizontalMenuPosition, EnumThemeAnimateMode } from '@/enum';
import jsonSetting from './theme.json'

const themeColorList = [
  '#18a058',
  '#1890ff',
  '#409EFF',
  // '#2d8cf0',
  '#007AFF',
  '#5ac8fa',
  '#5856D6',
  '#536dfe',
  // '#9c27b0',
  '#AF52DE',
  '#0096c7',
  '#00C1D4',
  '#34C759',
  '#43a047',
  '#7cb342',
  '#c0ca33',
  '#78DEC7',
  // '#e53935',
  '#d81b60',
  '#f4511e',
  '#fb8c00',
  '#ffb300',
  '#fdd835',
  // '#6d4c41',
  // '#546e7a',
]

const defaultThemeSetting = {
  themeColor: themeColorList[0],
  themeColorList,
  otherColor: {
    info: '#2080f0',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d',
  },
  isCustomizeInfoColor: false,
  settingDrawerVisible: false,
}

export const themeSetting = jsonSetting || defaultThemeSetting
