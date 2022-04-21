<script setup lang="ts">
import { GlobalThemeOverrides } from 'naive-ui'
import layout from '@/layout/layout.vue'

const themeOverrides: GlobalThemeOverrides = {}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <app-provider>
      <layout></layout>
    </app-provider>
  </n-config-provider>
</template>

<style lang="scss">
@import url('@/style/base.scss');
</style>
