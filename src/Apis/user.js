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
