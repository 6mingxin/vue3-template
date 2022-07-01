<template>
  <n-layout has-sider>
    <LayoutSider></LayoutSider>
    <div class="mian">
      <LayoutHeader></LayoutHeader>
      <LayoutTab></LayoutTab>
      <LayoutContent style="flex: 1; overflow: hidden"> </LayoutContent>
    </div>
  </n-layout>
</template>
<script lang="ts" setup>
import LayoutHeader from '@/layout/components/LayoutHeader.vue'
import LayoutContent from '@/layout/components/LayoutContent.vue'
import LayoutSider from '@/layout/components/LayoutSider.vue'
import LayoutTab from '@/layout/components/LayoutTab.vue'
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
  display: flex;
  flex-direction: column;
}
</style>
