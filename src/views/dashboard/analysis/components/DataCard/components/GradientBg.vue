<template>
  <n-el class="box" tag="div" :style="{ backgroundImage: gradientStyle }">
    <slot></slot>
  </n-el>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** 渐变开始的颜色 */
  startColor?: string
  /** 渐变结束的颜色 */
  endColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  startColor: '#56cdf3',
  endColor: '#719de3',
})

const gradientStyle = computed(() => `linear-gradient(to bottom right, ${props.startColor}, ${props.endColor})`)
</script>
<style scoped lang="scss">
.box {
  padding: 16px;
  border-radius: 16px;
}
</style>
