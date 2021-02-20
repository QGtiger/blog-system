<template>
  <div class="orm-overview">
    <div class="orm-row">
      <div class="left-overview">
        <div class="account-info">
          <div class="info-top">
            <div class="user-name fl">
              <div class="user-avatar fl circle">
                <img class="fit-img" :src="accountInfo.avatar" alt="">
              </div>
              <span class="ml-1" style="font-size: 18px">{{ accountInfo.username }}</span>
            </div>
            <div class="user-level fl ml-2">
              <span>您的级别为:</span>
              <span style="color: #ffaa33; font-weight: bold" class="ml-1">{{ admin ? '管理员' : '博主' }}</span>
            </div>
          </div>
          <div class="detail-info">
            <el-row :gutter="20">
              <el-col :span="12">
                <p>电子邮箱: <span>{{ accountInfo.email }}</span></p>
                <p>推荐文章: <span class="big-font">{{ accountInfo.recommendBlogs }}</span> 篇</p>
                <p>上次登录: <span class="bs-text">{{ $utilspro.dateFormat('YYYY-mm-dd  HH:MM:SS', accountInfo.lastLogin * 1000) }}</span></p>
              </el-col>
              <el-col :span="12">
                <p>信息认证： <span v-if="accountInfo.completed" class="info-completed">已完善 <svgComp type="iconrenzhengyonghu"></svgComp> </span>
                <span v-else class="uncompleted">未完善 <svgComp type="iconrenzheng"></svgComp> </span>
                </p>
                <p>发布文章: <span class="big-font">{{ accountInfo.publishBlogs }}</span> 篇</p>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
import { mapState } from 'vuex'

export default {
  setup () {
  
    return {
    }
  },
  computed: {
    ...mapState({
      accountInfo: (state: any) => state.auth.accountInfo,
      admin: (state: any) => state.auth.accountInfo.isAdmin
    })
  }
}
</script>

<style lang="scss" scoped>
div {
}
.big-font {
  font-size: 18px;
  color: rgb(255, 170, 51)
}
.orm-overview {
  .left-overview {
    .account-info {
      padding: 20px;
      background-color: #fff;
      border: 1px solid #f0f1f5;
      .info-top {
        line-height: 40px;
        overflow: hidden;
        border-bottom: 1px solid #ebecf0;
        padding-bottom: 15px;
        .user-avatar {
          width: 40px;
          height: 40px
        }
        .user-level {
          font-size: 13px;
        }
      }
      .detail-info {
        padding-top: 10px;
        font-size: 14px;
        line-height: 36px;
        p span {
          margin-left: 10px;
        }
        .info-completed {
          color: $info;
        }
        .uncompleted {
          color:$primary
        }
      }
    }
  }
}
</style>