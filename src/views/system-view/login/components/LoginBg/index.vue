<template>
  <div class="login-bg">
    <div class="login-bg__top">
      <corner-top :start-color="lightColor" :end-color="darkColor" />
    </div>
    <div class="login-bg__bottom">
      <corner-bottom :start-color="darkColor" :end-color="lightColor" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { getColorPalette } from '@/utils'
import { CornerTop, CornerBottom } from './components'

interface Props {
  /** 主题颜色 */
  themeColor: string
}

const props = defineProps<Props>()

const lightColor = computed(() => getColorPalette(props.themeColor, 3))
const darkColor = computed(() => getColorPalette(props.themeColor, 6))
</script>
<style scoped lang="scss">
.login-bg {
  position: absolute;
  left: 0px;
  top: 0px;
  overflow: hidden;
  z-index: 1;
  height: 100%;
  width: 100%;
  &__top {
    position: absolute;
    top: -900px;
    right: -300px;
  }
  &__bottom {
    position: absolute;
    bottom: -400px;
    left: -200px;
  }
}
</style>
