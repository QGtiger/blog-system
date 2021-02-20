import {  ElMessage, ElNotification } from 'element-plus'
let messagebox: any
let currentNotification: any
export default {
  showNotification (options: any) {
    if (currentNotification) {
      currentNotification.close()
    }
    const defaultOptions = {
      title: '提示',
      message: '',
      type: 'success',
      duration: 2000
    }
    const finalOpt = Object.assign(defaultOptions, options)
    currentNotification = ElNotification(finalOpt)
  },
  showMessage (options: any) {
    if (messagebox) {
      messagebox.close()
    }
    messagebox = ElMessage({
      message: options.message,
      type: options.type || 'success',
      duration: options.duration || 2000,
      offset: 40
    })
  },
  execCopyText: function (text: string) {
    const input = document.createElement('textarea')
    input.style.opacity = '0'
    input.style.position = 'absolute'
    input.style.top = '-100%'
    document.body.append(input)
    input.value = text
    input.select()
    document.execCommand('copy')
    this.showNotification('复制成功')
    input.remove()
  },
  downloadBlob: function (url: string, callback: any) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.onload = () => {
      callback(xhr.response)
    }
    xhr.onerror = () => {
      this.showNotification({
        title: '错误',
        type: 'warning',
        message: '下载出现错误'
      })
    }
    xhr.send(null)
  },
  downloadFile (fileName: string | number, fileUrl: string) {
    const link = document.createElement('a')
    const isStr = typeof fileUrl === 'string'
    link.href = isStr ? fileUrl : URL.createObjectURL(fileUrl)
    link.download = fileName as string
    link.click()
    link.remove()
    !isStr && URL.revokeObjectURL(link.href)
  },
  openUrl (url: string, type = '', config = '') {
    window.open(url, type, config)
  },
  responseInterceptors: function (res: any) {
    if (res.code !== 0) {
      this.showNotification({
        title: '错误',
        type: 'warning',
        message: res.msg || '操作失败'
      })
      throw new Error(res.msg || '操作失败')
    }
  },
  closeWindow () {
    const userAgent = navigator.userAgent
    if (userAgent.indexOf('Firefox') != -1 || userAgent.indexOf('Chrome') !=-1) {
        window.location.href='about:blank'
        window.close()
    } else {
        window.opener = null
        window.open('', '_self')
        window.close()
    }
  },
  dateFormat (fmt: string, d: any) {
    let ret
    const DayMap = {
      0: '日',
      1: '一',
      2: '二',
      3: '三',
      4: '四',
      5: '五',
      6: '六'
    }
    const date = new Date(d)
    const opt = {
      'Y+': date.getFullYear().toString(), // 年
      'm+': (date.getMonth() + 1).toString(), // 月
      'd+': date.getDate().toString(), // 日
      'H+': date.getHours().toString(), // 时
      'M+': date.getMinutes().toString(), // 分
      'S+': date.getSeconds().toString(), // 秒
      'D': date.getDay().toString()
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    }
    for (const k in opt) {
      ret = new RegExp('(' + k + ')').exec(fmt)
      if (ret) {
        if (k === 'D') {
          fmt = fmt.replace(ret[1], DayMap[opt[k]])
        } else {
          fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
        }
      }
    }
    return fmt
  }
}
