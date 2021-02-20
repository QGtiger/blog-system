import axios from 'axios'
import utilspro from '../utils/utilspro'
const { showNotification } = utilspro
import store from '@/store'
import router from '@/router'

// axios 配置
axios.defaults.timeout = 15000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true
console.log(process.env)
let service: any
if (process.env.NODE_ENV !== 'production') {
  service = axios.create({
    baseURL: process.env.VUE_APP_URL
  })
} else {
  service = axios
}

// POST传参序列化
service.interceptors.request.use((config: any) => {
  if (config.method === 'post' && typeof config.data === 'object') {
    if (Object.prototype.toString.call(config.data) != '[object FormData]') {
      const formData = new FormData()
      Object.keys(config.data).forEach(item => {
        formData.append(item, config.data[item])
      })
      config.data = formData
    }
  }
  config.headers.Authorization = store.getters.token
  return config
}, (err: any) => {
  showNotification({
    message: '参数错误[code-0]',
    type: 'error'
  })
  return Promise.reject(err)
})

// 返回状态判断
service.interceptors.response.use((res: any) => {
  const response = res.data
  if (response.status === 401) {
    router.push({
      name: 'auth-login'
    })
  }
  if (response.tips) {
    if (response.success) {
      if (response.is_show !== 1) {
        showNotification({
          message: response.tips
        })
      }
    } else {
      showNotification({
        message: response.tips,
        type: 'error'
      })
    }
  }
  // return response
  return Promise.resolve(response)
}, (err: any) => {
  showNotification({
    message: err,
    type: 'error'
  })
  return Promise.reject(err)
})

export default function request (method: string, url: string, data: any) {
  // 处理请求的url和数据
  data = method === 'get' ? { params: data } : data
  // 发送请求
  return new Promise((resolve, reject) => {
    service[method](url, data)
      .then((response: any) => {
        resolve(response)
      }, (error: any) => {
        reject(error)
      })
      .catch((error: any) => {
        showNotification({
          message: error,
          type: 'error'
        })
        reject(error)
      })
  })
    .catch(error => {
      console.log(error)
    })
}
