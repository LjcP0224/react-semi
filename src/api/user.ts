import axios from 'axios'

/**
 * @description 用户登录
 * @param {string} username 用户名
 * @param {string} password 密码
 * @param {}
 */
export interface LoginParams {
  username: string
  password: string
  code: string
  uuid: string
}
interface LoginResponse {
  code: number
  result: {
    token: string
  }
  message: string
}
export const login = (params: LoginParams) => {
  return axios.post<LoginResponse>('/login', params)
}

// 根据token获取用户信息
export const getUserInfo = () => {
  return axios.get('/getInfo')
}
