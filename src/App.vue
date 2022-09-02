<script setup>
import { darkTheme } from 'naive-ui'
import { useAppStore } from './store'
import { zhCN, dateZhCN } from 'naive-ui'
const app = useAppStore()
const theme = computed(() => {
  return app.inverted ? darkTheme : null
})
</script>

<template>
  <n-config-provider class="app" :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="app.naiveThemeOverrides" :theme="theme">
    <app-provider>
      <router-view />
    </app-provider>
  </n-config-provider>
</template>

<style lang="scss">
@import url('@/style/base.scss');
@import url('@/assets/iconfont/iconfont.css');

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
