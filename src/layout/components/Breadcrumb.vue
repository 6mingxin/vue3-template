<template>
  <n-breadcrumb class="px-12px">
    <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.key">
      <n-breadcrumb-item>
        <n-dropdown v-if="breadcrumb.hasChildren" :options="breadcrumb.children">
          <span>
            <component :is="breadcrumb.icon" class="inline-block align-text-bottom mr-4px text-16px" />
            <span>{{ breadcrumb.label }}</span>
          </span>
        </n-dropdown>
        <template v-else>
          <component :is="breadcrumb.icon" class="inline-block align-text-bottom mr-4px text-16px" />
          <span>{{ breadcrumb.label }}</span>
        </template>
      </n-breadcrumb-item>
    </template>
  </n-breadcrumb>
</template>

<script setup lang="ts">
// import { useThemeStore, useRouteStore } from '@/store';
// import { useRouterPush } from '@/composables';
import { getBreadcrumbByRouteKey } from '@/utils/breadcrumb'
// import { routePath } from '@/router/index'
const route = useRoute()
// const theme = useThemeStore()
// const routeStore = useRouteStore()
// const { routerPush } = useRouterPush()
console.log('路由数据', route)
const breadcrumbs: GlobalBreadcrumb[] = []
// const breadcrumbs = computed(() => getBreadcrumbByRouteKey(route.name as string, routeStore.menus as GlobalMenuOption[], routePath('root')))

// function dropdownSelect(key: string) {
//   routerPush({ name: key })
// }
</script>
<style scoped></style>
