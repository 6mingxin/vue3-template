import { EnumStorageKey } from '@/enum'
import { setLocal, getLocal, removeLocal } from '../storage'
import { userInfo } from '@/type/auth'

/** 设置token */
export function setToken(token: string) {
  setLocal(EnumStorageKey.token, token)
}

/** 获取token */
export function getToken() {
  return getLocal<string>(EnumStorageKey.token) || ''
}

/** 去除token */
export function removeToken() {
  removeLocal(EnumStorageKey.token)
}

/** 获取refresh token */
export function getRefreshToken() {
  return getLocal<string>(EnumStorageKey['refresh-token']) || ''
}

/** 设置refresh token */
export function setRefreshToken(token: string) {
  setLocal(EnumStorageKey['refresh-token'], token)
}

/** 去除refresh token */
export function removeRefreshToken() {
  removeLocal(EnumStorageKey['refresh-token'])
}

/** 获取用户信息 */
export function getUserInfo() {
  const emptyInfo: userInfo = {
    userId: '',
    userName: '',
    userPhone: '',
    userRole: 'test',
  }
  const userInfo: userInfo = getLocal<userInfo>(EnumStorageKey['user-info']) || emptyInfo
  return userInfo
}

/** 设置用户信息 */
export function setUserInfo(userInfo: userInfo) {
  setLocal(EnumStorageKey['user-info'], userInfo)
}

/** 去除用户信息 */
export function removeUserInfo() {
  removeLocal(EnumStorageKey['user-info'])
}

/** 去除用户相关缓存 */
export function clearAuthStorage() {
  removeToken()
  removeRefreshToken()
  removeUserInfo()
}