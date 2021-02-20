const authLayout = () => import('@/layout/authLayout.vue')

export default [
  {
    path: '/auth',
    name: 'auth',
    component: authLayout,
    meta: {
      title: 'auth'
    },
    children: [
      {
        path: 'login',
        name: 'auth-login',
        meta: {
          title: '登录'
        },
        component: () => import('@/views/common/auth/login/login.vue')
      }
    ]
  }
]