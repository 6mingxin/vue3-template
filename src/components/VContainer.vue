<template>
  <n-el
    class="v-container"
    tag="div"
    :style="{
      backgroundColor: isBg ? 'var(--card-color)' : 'transparen',
      padding,
    }"
  >
    <slot />
  </n-el>
</template>
<script lang="ts" setup>
withDefaults(
  defineProps<{
    isBg?: boolean
    padding?: string
  }>(),
  {
    isBg: true,
    padding: '12px',
  },
)
</script>
<style lang="scss" scoped>
.v-container {
  box-sizing: border-box;
  height: 100%;
  border-radius: 12px;
  transition: 0.3s var(--cubic-bezier-ease-in-out);
}
</style>
