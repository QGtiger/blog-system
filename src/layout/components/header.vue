<template>
  <div class="header-meta">
    <div class="time-now">
      {{ timeNow }}
    </div>
    <div class="toolbar-right">
      <div class="account-basic_info">
        <el-popover
          placement="bottom"
          :width="220"
          trigger="hover"
          :offset="8"
          @hide="isHover = false"
          popper-class="account-info"
        >
          <div class="account-popover__cont">
            <div class="acount-avatar circle">
              <img :src="accountInfo.avatar" alt="" class="fit-img">
            </div>
            <div class="top-info">
              <p class="username lineClamp1">{{ accountInfo.username }}</p>
            </div>
          </div>
          <template #reference>
            <div class="account-avatar" :class="{'hover-active': isHover}" @mouseover="isHover = true">
              <img class="fit-img" :src="accountInfo.avatar" alt="">
            </div>
          </template>
        </el-popover>
        <div class="account-name">{{ accountInfo.username }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import utilspro from '@/utils/utilspro'
import { mapState } from 'vuex'

export default {
  setup () {
    const timeNow = ref('')
    return {
      timeNow
    }
  },
  data () {
    return {
      isHover: false
    }
  },
  computed: {
    ...mapState({
      accountInfo: (state: any) => state.auth.accountInfo
    })
  },
  mounted () {
    const formatDate = utilspro.dateFormat
    this.timeNow = formatDate('YYYY-mm-dd  星期D  HH:MM:SS', new Date())
    setInterval(() => {
      this.timeNow = formatDate('YYYY-mm-dd  星期D  HH:MM:SS', new Date())
    }, 1000)

  }
}
</script>

<style lang="scss" scoped>
.account-popover__cont {
  padding-top: 20px;
  .top-info {
    padding-bottom: 15px;
    border-bottom: 1px solid #ccc
  }
  .username {
    padding: 0 20px;
    text-align: center;
    font-size: 16px;
  }
  .acount-avatar {
    position: absolute;
    left: 50%;
    top: -30px;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    box-shadow: 0 0 5px #ccc;
  }
}

.header-meta {
  display: flex;
  line-height: 40px;
  background: #fff;
  box-shadow: 0 2px 5px #c3cfe282;
  padding: 0 20px;
  .time-now {
    font-size: 14px;
  }
  .toolbar-right {
    margin-left: auto;
    display: flex;
    .account-basic_info {
      display: flex;
      align-items: center;
      .account-name {
        width:100px;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-left: 10px;
      }
      .account-avatar {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        overflow: hidden;
        box-shadow: 0 0 3px #ccc;
        transform-origin: center top;
        transition:  all .3s ease;
        &.hover-active {
          transform: translate(0, 15px) scale(1.3)
        }
      }
    }
  }
}
</style>

<style lang="scss">
.account-info {
  position: relative;
  .el-popper__arrow {
    display: none;
  }
}
</style>
