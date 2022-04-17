<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
import layout from '@/layout/layout.vue'

const themeOverrides: GlobalThemeOverrides = {}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <layout></layout>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style lang="scss">
@import url('@/style/base.scss');
</style>
