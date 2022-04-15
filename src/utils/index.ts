/**
 * 获取api文件下的请求函数
 * @returns 请求函数
 */
const getApi = (funName: string) => {
  const api = import.meta.globEager('../api/*.js')
  let apiFunc = null
  for (const key in api) {
    if (Object.prototype.hasOwnProperty.call(api, key)) {
      for (const a in api[key]) {
        // apiFuncs[a] = api[key][a]
        if (funName === a) {
          apiFunc = api[key][a]
        }
      }
    }
  }
  return apiFunc
}
