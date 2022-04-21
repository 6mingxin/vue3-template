<template>
  <n-layout-sider
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    show-trigger="bar"
    bordered
    :collapsed="collapsed"
    :inverted="false"
    @after-enter="afterEnter"
    @update:collapsed="onCollapsed"
  >
    <div class="v-flex logo">
      <img src="/favicon.ico" alt="" />
      <div v-show="showTitle" class="logo__title">Vue3 + TS + Naive模板</div>
    </div>
    <n-menu
      :indent="20"
      style="height: 100vh"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :render-icon="renderMenuIcon"
      :options="menuOptions"
      :inverted="false"
      :value="checked"
      @update:value="onChange"
    />
  </n-layout-sider>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import type { MenuOption } from 'naive-ui'
const r = useRoute()
const re = useRouter()

const app = useAppStore()
const collapsed = computed(() => {
  if (app.siderCollapse) showTitle.value = false
  return app.siderCollapse
})
const showTitle = ref(true)
const checked = ref('narrator')

const onCollapsed = (status: boolean): void => {
  app.toggleSiderCollapse()
}

const renderMenuIcon = (option: MenuOption) => {
  return h('div', { class: 'iconfont icon-delPic' })
}
const afterEnter = () => (showTitle.value = true)
const onChange = (key: string, item: MenuOption) => {
  checked.value = key
}
const menuOptions: MenuOption[] = [
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
          },
          {
            label: '羊男',
            key: 'sheep-man',
          },
        ],
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky',
            href: 'https://baike.baidu.com/item/%E5%A8%81%E5%A3%AB%E5%BF%8C%E9%85%92/2959816?fromtitle=%E5%A8%81%E5%A3%AB%E5%BF%8C&fromid=573&fr=aladdin',
          },
        ],
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich',
          },
        ],
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
      },
    ],
  },
]
</script>
<style lang="scss">
.logo {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  &__title {
    margin-left: 6px;
  }
}
</style>
