<template>
  <div class="parint">
    <n-card title="打印" class="parint-card">
      <n-button type="primary" class="parint-card__table" @click="printTable">打印表格</n-button>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import printJS from 'print-js'

function printTable() {
  printJS({
    printable: [
      { 姓名: 'soybean', 微信: 'honghuangdc', 备注: '打印表格' },
      { 姓名: 'soybean', 微信: 'honghuangdc', 备注: '打印表格' },
    ],
    properties: ['姓名', '微信', '备注'],
    type: 'json',
  })
}
</script>
<style scoped lang="scss">
.parint {
  height: 100%;
  &-card {
    border-radius: 16px;
    box-shadow: var(--n-box-shadow);
    &__table {
      margin-right: 20px;
    }
  }
}
</style>
