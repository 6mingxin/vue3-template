<template>
  <div v-if="showTooltip">
    <n-tooltip :placement="placement" trigger="hover">
      <template #trigger>
        <div class="v-flex v-flex-center tooltip" :class="contentClass">
          <slot></slot>
        </div>
      </template>
      {{ tooltipContent }}
    </n-tooltip>
  </div>
  <div v-else class="v-flex v-flex-center tooltip" :class="contentClass">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  /** tooltip显示文本 */
  tooltipContent?: string
  /** tooltip的位置 */
  placement?: 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'
  /** class类 */
  contentClass?: string
}
const props = withDefaults(defineProps<Props>(), {
  tooltipContent: '',
  placement: 'bottom',
  contentClass: '',
})

const showTooltip = computed(() => Boolean(props.tooltipContent))
</script>
<style scoped lang="scss">
.tooltip {
  height: 100%;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--n-color);
    filter: contrast(90%);
  }
}
</style>
