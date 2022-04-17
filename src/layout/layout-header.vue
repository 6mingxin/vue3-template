<template>
  <div class="header">
    <hover-container class="hover-container" @click="app.toggleSiderCollapse">
      <div v-if="app.siderCollapse" class="iconfont icon-nav-collapsed"></div>
      <div v-else class="iconfont icon-nav-collapse"></div>
    </hover-container>
  </div>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store/app'
const app = useAppStore()
</script>
<style lang="scss">
.icon-nav-collapse {
  font-size: 16px;
}
.icon-nav-collapsed {
  font-size: 16px;
}
.hover-container {
  width: 40px;
  height: 100%;
}
.header {
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
