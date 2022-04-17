<template>
  <n-layout has-sider>
    <layout-sider />
    <div class="mian">
      <layout-header></layout-header>
      <layout-tab></layout-tab>
      <layout-content> </layout-content>
    </div>
  </n-layout>
</template>
<script lang="ts" setup>
import layoutHeader from '@/layout/layout-header.vue'
import layoutContent from '@/layout/layout-content.vue'
import layoutSider from '@/layout/layout-sider.vue'
import layoutTab from '@/layout/layout-tab.vue'
</script>
<style lang="scss">
.layout {
  width: 100%;
  height: 100%;
  display: flex;
}
.mian {
  flex: 1;
  overflow: hidden;
  height: 100vh;
}
</style>
