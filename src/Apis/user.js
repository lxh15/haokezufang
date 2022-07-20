// import store from '@/store'
import request from '@/utlis/request.js'
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
export const favorites = () => {
  // console.log(store.state.user)
  return request({
    url: '/user/favorites',
    method: 'GET'
  })
}

// /user/houses
export const houses = () => {
  // console.log(store.state.user)
  return request({
    url: '/user/houses',
    method: 'GET'
  })
}
/**
 * 租房小组的数据
 * @returns promise
 */
export const getHomeGroups = () => {
  return request({
    url: '/home/groups'
  })
}

/**
 *房屋详情
 * @param {*} id 房屋code值
 * @returns promise
 */
export const houseDetail = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
