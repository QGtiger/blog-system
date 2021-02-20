/**
 *
 * @param {*} key localStorage => key
 * @param {*} value localStorage => value
 */
export const setItem = (key: string | number, value: string | number) => {
  if (!key) {
    return false
  } else {
    localStorage.setItem(key as string, value as string)
  }
}
/**
 *
 * @param {*} key ocalStorage => key
 */
export const getItem = (key: string | number) => {
  const item = localStorage.getItem(key as string)
  if (!item) {
    return false
  } else {
    return item
  }
}
/**
 *
 * @param {*} key localStorage => key
 */
export const removeItem = (key: string | number) => {
  localStorage.removeItem(key as string)
}


export const getQueryString = (name: string) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const searchStr = window.location.search.substr(1).match(reg)
  if (searchStr != null) return unescape(searchStr[2])
  return null
}

