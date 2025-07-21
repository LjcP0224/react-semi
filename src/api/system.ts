import axios from 'axios'

/**
 * @description 获取验证码
 * @returns
 */
export interface CaptchaResponse {
  result: {
    captchaEnabled: boolean
    img: string // 验证码图片
    uuid: string // 验证码 uuid
  }
}

export function getCaptchaImg() {
  return axios.get<CaptchaResponse>('/captchaImage')
}

/**
 * @description 根据 token 获取路由信息
 */
export const getRoutes = () => {
  return axios.get('/getRouters')
}
