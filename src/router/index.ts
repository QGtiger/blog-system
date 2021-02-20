import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store/index'
import common from './common'
import orm from './orm'

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const routes: Array<RouteRecordRaw> = [
  ...common,
  ...orm
]

console.log(process)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '在线咨询'
  const query = Object.assign({
    redirect: to.fullPath
  }, to.query)
  const loginStatus = store.getters.loginStatus
  if (to.name === 'auth-login') {
    next()
  } else if (to.matched.some(record => record.meta.login) && !loginStatus) {
    next({
      name: 'auth-login',
      query
    })
  } else {
    next()
  }
})


export default router
