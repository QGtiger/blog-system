<template>
  <div class="main-nav__cont">
    <el-scrollbar>
      <el-menu
        background-color="transparent"
        :router="true"
        :default-active="activeIndex"
      >
        <div v-for="(item, index) in menuList"
          :key="index"
        >
          <div v-if="item.subs && item.subs.length > 0">
            <el-submenu :index="item.key">
              <template #title>
                <i class="iconfont" :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item
                v-for="menu2 in item.subs"
                :key="menu2.key"
                :index="menu2.key"
              >
                <i class="iconfont" :class="item.icon"></i>
                <span>{{ menu2.title }}</span>
              </el-menu-item>
            </el-submenu>
          </div>
          <div v-else>
            <el-menu-item :index="item.key">
              <i class="iconfont" :class="item.icon"></i>
                <span>{{ item.title }}</span>
            </el-menu-item>
          </div>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapState } from 'vuex'

export default defineComponent({
  name: 'renderMenu',
  setup () {
    const activeIndex = ref('')
    return {
      activeIndex
    }
  },
  computed: {
    ...mapState({
      menuList: (state) => state.auth.menuList
    })
  },
  mounted () {
    this.activeIndex = this.$route.path
    console.log(this.menuList)
  },
})

</script>

<style lang="scss">
ul[role="menubar"] > div {
  border-bottom: 1px solid #455368;
}

.main-nav__wrap {
  height: calc(100% - 200px);
  .el-scrollbar__bar.is-horizontal {
    display: none !important;
  }
}

.main-nav__cont {
  color: rgb(191, 203, 217);
  overflow: hidden;
  height: 100%;
  .el-scrollbar__wrap {
    overflow-y: auto;
    overflow-x: hidden;
  }
  .el-menu {
    border-right: none;
  }
  .el-menu-item {
    color: inherit;
    height: 48px;
    line-height: 48px;
    &:hover {
      color: #ccdfff;
      background-color: #3e4a5d !important;
    }
    &.is-active {
      color: #fff;
      background-color: #303742 !important;
      background-image: linear-gradient(90deg, #30cfd0 0%, #30cfd0 4px, #30cfd049 4px, transparent);
    }
  }
  .el-submenu__title {
    color: inherit;
    height: 48px;
    line-height: 48px;
  }
  .el-submenu {
    .el-submenu__title:hover {
      color: #ccdfff !important;
      background-color: #3e4a5d !important;
    }
    .el-menu-item {
      background-color: rgba(255,255,255,0.1) !important;
      font-size: 12px;
      &:hover {
        background-color: #5b6a7e !important;
        color: rgba(255,255,255,0.8) !important;
      }
    }
  }
}
</style>
