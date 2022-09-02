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
          keepAlive: true,
          title: '打印',
          icon: 'icon-a-83-dayin',
        },
      },
      {
        name: 'example_edit',
        path: '/example/edit',
        meta: {
          title: '编辑',
          icon: 'icon-a-83-dayin',
          hide: true,
        },
      },
    ],
  },
  {
    name: 'system-setting',
    path: '/system-setting',
    meta: {
      title: '系统设置',
      icon: 'icon-igw-l-dashboard-rectangle-add',
    },
    children: [
      {
        name: 'system-setting_personnel',
        path: '/system-setting/personnel',
        meta: {
          title: '人员管理',
          icon: 'icon-fuwenbenbianjiqi_biaoge',
        },
      },
    ],
  },
]
