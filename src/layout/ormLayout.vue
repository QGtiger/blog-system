<template>
  <div class="orm-layout">
    <div class="left-layout">
      <LeftNav></LeftNav>
    </div>
    <div class="right-layout">
      <div class="header-layout">
        <Header></Header>
      </div>
      <div class="router-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Header from './components/header.vue'
import LeftNav from './components/leftNav.vue'

export default {
  setup () {
    const state = reactive({
      count: 0,
    })
  
    return {
      ...toRefs(state),
    }
  },
  components: {
    Header,
    LeftNav
  },
  created () {
    this.handleGetAccountInfo()
  },
  methods: {
    handleGetAccountInfo () {
      this.$api.auth.accountInfo().then((res) => {
        if (res.success) {
          const userDetail = res.userDetail
          const info = {
            avatar: res.avator,
            username: res.username,
            email: userDetail.email,
            lastLogin: userDetail.lastLogin,
            publishBlogs: userDetail.publishBlogs,
            recommendBlogs: userDetail.recommendBlogs,
            isAdmin: res.isAdmin
          }
          this.$store.commit('setAccountInfo', info)
          this.$store.commit('setMenuList', res.menu_list)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.orm-layout {
  display: flex;
  height: $outer_height;
  width: $outer_width;
  .left-layout {
    flex-shrink: 0;
    flex-grow: 0;
  }
  .right-layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-color: #c3cfe282;
  }
  .router-view {
    padding: 20px;
  }
}
</style>