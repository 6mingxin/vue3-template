export const constantRoutes: Route[] = [
  {
    name: 'dashboard',
    path: '/dashboard',
    meta: {
      title: '仪表盘',
      icon: 'icon-fenxi',
    },
    children: [
      {
        name: 'dashboard_analysis',
        path: '/dashboard/analysis',
        meta: {
          title: '分析页',
          icon: 'icon-tongjifenxi',
        },
      },
    ],
  },
  {
    name: 'example',
    path: '/example',
    meta: {
      title: '示例',
      icon: 'icon-igw-l-dashboard-rectangle-add',
    },
    children: [
      {
        name: 'example_table',
        path: '/example/table',
        meta: {
          title: '表格',
          icon: 'icon-fuwenbenbianjiqi_biaoge',
        },
      },
      {
        name: 'example_print',
        path: '/example/print',
        meta: {
          title: '打印',
          icon: 'icon-a-83-dayin',
        },
      },
    ],
  },
]
