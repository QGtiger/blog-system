
// 简单的非空判断
export const notEmpty = (value: string, fieldName: string) => {
  if (!value) {
    return `请输入${fieldName}`
  } else {
    return undefined
  }
}

//邮箱判断
export const vemail = (value: string, fieldName: string | undefined) => {
  const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!emailReg.test(value)) {
    return `${fieldName || '邮箱'}格式不正确`
  } else {
    return undefined
  }
}