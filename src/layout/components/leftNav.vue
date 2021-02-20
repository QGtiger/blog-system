<template>
  <div class="left-nav__wrap">
    <div class="top-account__cont">
      <div class="account-avatar">
        <img class="fit-img" :src="accountInfo.avatar" alt="">
      </div>
      <p class="lineClamp1 tc account-name">{{ accountInfo.username }}</p>
    </div>
    <div class="main-nav__wrap mt-2">
      <RenderMenu></RenderMenu>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RenderMenu from './mainNav'

export default {
  components: {
    RenderMenu
  },
  computed: {
    ...mapState({
      accountInfo: state => state.auth.accountInfo
    })
  }
}
</script>

<style lang="scss" scoped>
.left-nav__wrap {
  width: 180px;
  height: $outer_height;
  background: #3e4a5d;
  .top-account__cont {
    overflow: hidden;
  }
  .account-avatar {
    width: 80px;
    height: 80px;
    margin: 50px auto 15px;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: 0 0 0px 3px #cccccc78;
  }
  .account-name {
    color: $color_white;
    padding: 0 20px;
  }
}
</style>
