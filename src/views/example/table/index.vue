<template>
  <v-container>
    <div class="search">
      <n-form-item class="search-item" size="small" label-placement="left" label="姓名">
        <n-input v-model:value="search.name" />
      </n-form-item>
      <n-form-item class="search-item" size="small" label-placement="left" label="年龄">
        <n-input v-model:value="search.age" />
      </n-form-item>
      <n-button type="primary" size="small" style="margin-right: 10px">
        <template #icon>
          <i class="iconfont icon-sousuo search-button__icon"></i>
        </template>
        搜 索
      </n-button>
      <n-button size="small">重 置</n-button>
    </div>
    <div>
      <n-button type="primary" size="small" style="margin-right: 10px; margin-bottom: 10px">
        <template #icon>
          <i class="iconfont icon-tianjia search-button__icon"></i>
        </template>
        添 加
      </n-button>
    </div>
    <n-data-table size="small" :columns="columns" :data="data" :pagination="pagination" />
  </v-container>
</template>
<script lang="ts" setup>
import { NTag, NButton } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
type RowData = {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}
const pagination = ref({
  pageSize: 10, //每页多少条数据
  page: 1, //当前页
  itemCount: 20, //总数据条数
  pageSizes: [10, 20, 40, 60, 70, 80, 100], //每一页的条数
  showQuickJumper: true, //是否显示快速跳转
  showSizePicker: true, //是否显示每页条数的选择器
  //更改每页的显示数量
  onUpdatePageSize: (e: number) => {
    pagination.value.pageSize = e
  },
  // 切换换分页
  onUpdatePage: (e: number) => {
    pagination.value.page = e
  },
})
const search = ref({
  name: '',
  age: '',
})
const createColumns = ({ sendMail }: { sendMail: (rowData: RowData) => void }): DataTableColumns<RowData> => {
  return [
    {
      title: '姓名',
      key: 'name',
    },
    {
      title: '年龄',
      key: 'age',
    },
    {
      title: '地址',
      key: 'address',
    },
    {
      title: '标签',
      key: 'tags',
      render(row) {
        const tags = row.tags.map(tagKey => {
          return h(
            NTag,
            {
              style: {
                marginRight: '6px',
              },
              type: 'info',
              bordered: false,
            },
            {
              default: () => tagKey,
            },
          )
        })
        return tags
      },
    },
    {
      title: '操作',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            size: 'small',
            onClick: () => sendMail(row),
          },
          { default: () => '查看' },
        )
      },
    },
  ]
}
const data = ref<RowData[]>([
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['wow'],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
])
const columns = ref(
  createColumns({
    sendMail(rowData) {
      console.log('send mail to ' + rowData.name)
    },
  }),
)
const searchIcon = h('i', { class: 'iconfont icon-sousuo' }, {})
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  // align-items: center;
  &-item {
    margin-right: 24px;
  }
  &-button__icon {
    font-size: 14px;
    line-height: 1;
    display: flex;
    align-items: center;
  }
}
</style>
