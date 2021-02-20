<!-- 登录页面 -->
<template>
  <div class="login-form__container">
    <div class="login-form-model">
      <div class="qg-tabs__cont">
        <div class="qg-tabs-header">
          <div class="qg-tabs__item" :class="{
            active: tabActive === 0
          }" >
            <span @click="handleSwitchTab(0)">
              登录
            </span>
          </div>
          <div class="qg-tabs__item" :class="{
            active: tabActive === 1
          }" >
            <span @click="handleSwitchTab(1)">
              注册
            </span>
          </div>
        </div>
        <div class="qg-tabs__content">
          <div class="qg-tabs-pane login-pane" v-if="tabActive === 0">
            <el-form
            :model="loginForm"
            ref="loginForm"
            :rules="loginFormRules"
            label-position="top"
            >
              <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model.trim="loginForm.password" placeholder="请输入密码" clearable show-password></el-input>
              </el-form-item>
              <el-form-item style="margin-top: 22px">
                <el-button size="medium" style="width: 100%" type="primary" :disabled="loginDisabled" @click="handleLogin" :loading="loading">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="qg-tabs-pane register-pane" v-else>
            <el-form
            :model="registForm"
            ref="registForm"
            :rules="registFormRules"
            label-position="top"
            >
              <el-form-item label="用户名" prop="username">
                <el-input v-model="registForm.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-autocomplete v-model="registForm.email" placeholder="请输入邮箱"
                :trigger-on-focus="false"
                :fetch-suggestions="querySearch"
                :validate-event="!selectSearch"
                @select="selectSearch = false"
                ></el-autocomplete>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model.trim="registForm.password" placeholder="请输入密码" clearable show-password></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="rePassword">
                <el-input v-model.trim="registForm.rePassword" placeholder="请确认密码" clearable show-password></el-input>
              </el-form-item>
              <el-form-item style="margin-top: 22px">
                <el-button size="medium" style="width: 100%" type="primary" :disabled="registDisabled" @click="handleRegist" :loading="loading">注册</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, ref } from 'vue'
import { normalDataType, responseDataType } from '@/types/ComponentDataType'
import { notEmpty, vemail } from '@/utils/formRules'

export default defineComponent({
  setup () {
    // 登录表单验证
    const loginFormRules: any = reactive({
      username: [
        {
          validator: (r: any, v: string, cb: any) => {
            cb(notEmpty(v, '用户名'))
          },
          trigger: 'blur',
          valid: notEmpty
        }
      ],
      password: [
        {
          validator: (r: any, v: string, cb: any) => {
            cb(notEmpty(v, '密码'))
          },
          trigger: 'blur',
          valid: notEmpty
        }
      ]
    })
    //注册表单验证
    const registFormRules: any = reactive({
      username: [
        {
          validator: (r: any, v: string, cb: any) => {
            cb(notEmpty(v, '用户名'))
          },
          trigger: 'blur',
          valid: notEmpty
        }
      ],
      email: [
        {
          validator: (r: any, v: string, cb: any) => {
            cb(notEmpty(v, '邮箱'))
          },
          trigger: 'blur',
          valid: notEmpty
        },
        {
          validator: (r: any, v: string, cb: any) => {
            cb(vemail(v, '注册邮箱'))
          },
          trigger: 'blur',
          valid: vemail
        }
      ],
      password: [
        {
          validator: (r: any, v: string, cb: any) => {
            cb(notEmpty(v, '密码'))
          },
          trigger: 'blur',
          valid: notEmpty
        },
      ],
      rePassword: [
        {
          validator: (r: any, v: string, cb: any) => {
            cb(notEmpty(v, '确认密码'))
          },
          trigger: 'blur',
          valid: notEmpty
        }
      ]
    })
    // 登录disabled
    const loginDisabled = computed(() => {
      return !Object.keys(loginFormRules).every(item => loginFormRules[item].valid)
    })
    // 注册disabled
    const registDisabled = computed(() => {
      return !Object.keys(registFormRules).every(item => registFormRules[item].valid)
    })
    // email 补全
    const querySearch = (value: string, cb: any) => {
      cb(['qq.com', 'outlook.com', '163.com', '369.com', 'uzi.com', 'jacklove.com'].map((suffix: string) => {
        return {
          value: `${value}@${suffix}`
        }
      }))
    }
    return {
      loginFormRules,
      registFormRules,
      loginDisabled,
      registDisabled,
      querySearch,
      loading: ref(false)
    }
  },
  data<T> (): normalDataType<T> {
    return {
      tabActive: 0,
      selectSearch: false,
      loginForm: {
        username: '',
        password: ''
      },
      registForm: {
        username: '',
        email: '',
        password: '',
        rePassword: ''
      }
    }
  },
  watch: {
    loginForm: {
      handler: function<T> (n: any) {
        this.handleWatchFormValid(n, 'loginForm')
      },
      deep: true
    },
    registForm: {
      handler: function<T> (n: any) {
        this.handleWatchFormValid(n, 'registForm')
      },
      deep: true
    }
  },
  computed: {
  },
  methods: {
    handleSwitchTab (index: number) {
      this.tabActive = index
    },
    handleWatchFormValid: function<T> (n: any, formName: any) {
      if (!formName) return
      const formRules: string = formName + 'Rules'
      const refs: normalDataType<T> = this.$refs
      Object.keys(n).forEach(key => {
        const keyValue = n[key]
        const valid = this[formRules][key].every((validator: any) => !validator.valid(keyValue))
        if (valid) refs[formName].clearValidate(key)
        this[formName+'Rules'][key].valid = valid
      })
    },
    handleLogin: function<T> (): void {
      this.loading = true
      this.$api.auth.accountLogin(this.loginForm).then((res: responseDataType<T>) => {
        if (res.status) {
          this.$store.dispatch('setToken', res.token)
          if (this.$route.query && this.$route.query.redirect) {
            const redirect = this.$route.query.redirect
            const quertData = this.$route.query
            delete quertData.redirect
            this.$router.push({
              path: redirect as string,
              query: quertData
            })
          } else {
            this.$router.push({
              path: '/orm'
            })
          }
        }
      }).finally(() => {
        this.loading = false
      })
    },
    handleRegist (): void {
      this.loading = true
      this.$api.auth.accountRegist({
        username: this.registForm.username,
        'email_input': this.registForm.email,
        password: this.registForm.password,
        'new_password': this.registForm.rePassword
      }).finally(() => {
        this.loading = false
      })
    }
  }
})
</script>

<style lang="scss">

.login-pane, .register-pane {
  .el-form-item {
    margin-bottom: 12px;
  }
  .el-form--label-top .el-form-item__label {
    padding: 0;
    line-height: 34px;
  }
  .el-autocomplete {
    width: 100%;
  }
}
</style>

<style lang="scss" scoped>
.qg-tabs__cont{
  .qg-tabs-header {
    display: flex;
    line-height: 38px;
    font-size: 18px;
    .qg-tabs__item {
      width: 100%;
      text-align: center;
      &.active {
        color: #409eff;
        span::after {
          position: absolute;
          content: '';
          height: 1px;
          width: 80%;
          background: #409eff;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      span {
        cursor: pointer;
        position: relative;
      }
    }
  }
  .qg-tabs-pane {
    margin-top: 15px;
  }
}


.login-form__container {
  position: relative;
  width: 400px;
  height: 100%;
  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .login-form-model {
    width: 380px;
    display: inline-block;
    margin-left: -40px;
    vertical-align: middle;
    background-color: #fff;
    padding: 30px 50px;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    box-sizing: border-box;
  }
}
</style>