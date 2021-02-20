const ormLayout = () => import('@/layout/ormLayout.vue')

export default [
  {
    path: '/orm',
    name: 'orm',
    component: ormLayout,
    redirect: '/orm/overview',
    meta: {
      title: 'ORM 后台',
      login: true
    },
    children: [
      {
        path: 'overview',
        name: 'orm-overview',
        meta: {
          title: 'overview'
        },
        component: () => import('@/views/orm/overview.vue')
      }
    ]
  },
  {
    path: '/orm/account',
    name: 'orm-account',
    component: ormLayout,
    redirect: '/orm/account/list',
    meta: {
      login: true
    },
    children: [
      {
        path: 'list',
        name: 'orm-account-list',
        meta: {
          title: '用户信息'
        },
        component: () => import('@/views/orm/account/overview.vue')
      }
    ]
  },
]