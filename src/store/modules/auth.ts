import { getItem, setItem } from '@/utils/utils'

const auth = {
  state: {
    token: getItem('token') || '',
    username: '',
    accountInfo: {
      avatar: '', // 头像👮‍♀️
    },
    menuList: [], // orm 后台菜单
  },
  getters: {
    token: (state: any) => state.token,
    loginStatus: (state: any) => !! state.token,
    admin: (state: any) => state.accountInfo.isAdmin
  },
  mutations: {
    setAccountInfo (state: any, obj: any) {
      state.accountInfo = obj
    },
    setMenuList (state: any, list: any) {
      state.menuList = list
    },
    SET_TOKEN (state: any, s: string) {
      setItem('token', s)
      state.token = s
    }
  },
  actions: {
    setToken (context: any, token: string) {
      context.commit('SET_TOKEN', token)
    }
  }
}

export default auth