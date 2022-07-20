import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
// 配置axios 利用axios的create方法创建一个新的axios对象 ，克隆
const request = axios.create({
  baseURL: 'http://liufusong.top:8080',
  timeout: 10000
})

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = store.state.user.token
    // 在发送请求之前做些什么
    if (token) {
      config.headers.Authorization = token
    }
    // console.log(config)
    return config
  },
  (error) => {
    // 对请求错误做些什么
    Toast.fail(error.message)
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.message.includes('timeout')) {
      // 判断请求异常信息中是否含有超时timeout字符串
      Toast.fail('请求超时，请稍后再试')
      return Promise.reject(error) // reject这个错误信息
    }
    Toast.fail('网络连接失败，请稍后再试')
    return Promise.reject(error)
  }
)

export default request
