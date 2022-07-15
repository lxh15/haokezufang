import store from '@/store'
import request from '@/utlis/request'
/**
 *登录接口
 * @param {*} username 账号
 * @param {*} password 密码
 * @returns promise
 */
export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}

/**
 *收藏列表
 * @returns
 */
export const favorites = (token) => {
  // console.log(store.state.user)
  return request({
    url: '/user/favorites',
    method: 'GET',
    headers: {
      Authorization: store.state.user.token
    }
  })
}

// /user/houses
export const houses = (token) => {
  // console.log(store.state.user)
  return request({
    url: '/user/houses',
    method: 'GET',
    headers: {
      Authorization: store.state.user.token
    }
  })
}
