import { Form, Button, Lottie, Toast } from '@douyinfe/semi-ui'
import { IconUserCircle, IconLock } from '@douyinfe/semi-icons'
import { login } from '@/api/user'
import { getCaptchaImg } from '@/api/system'
import type { LoginParams } from '@/api/user'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { setToken } from '@/utils/auth'

import animationData from '@/views/login/Frankenstein.json'
import { useTranslation } from 'react-i18next'

const LoginForm = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()
  const [formValue, setFormValue] = useState<LoginParams>({
    username: '',
    password: '',
    code: '',
    uuid: ''
  })

  const [captchaImage, setCaptchaImage] = useState('')

  const handleSubmit = (values: LoginParams) => {
    login({
      ...values,
      uuid: formValue.uuid
    })
      .then((res) => {
        const { code, message, result } = res.data
        if (code == 200) {
          setToken(result.token)
          navigate('/')
        } else {
          Toast.error(message)
        }
      })
      .catch(() => {
        getCaptcha()
      })
  }

  const getCaptcha = useCallback(async () => {
    try {
      const res = await getCaptchaImg()
      const { result } = res.data
      setCaptchaImage(`data:image/png;base64,${result.img}`)
      setFormValue((prev) => ({
        ...prev,
        uuid: result.uuid
      }))
    } catch {
      Toast.error('获取验证码失败')
    }
  }, [])

  useEffect(() => {
    getCaptcha()
  }, [getCaptcha])

  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      <div className="border border-[--semi-color-border)] flex justify-center items-center ">
        <div className="w-96 h-96">
          <Lottie
            params={{
              animationData: animationData
            }}
            width="100%"
            height="100%"
          />
        </div>
        <div className="p-6">
          <h1 className=" text-center font-bold text-3xl">LOGIN</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              label="用户名"
              prefix={<IconUserCircle />}
              noLabel
              placeholder="请输入用户名"
              initValue=""
              field="username"></Form.Input>
            <Form.Input
              label="密码"
              prefix={<IconLock />}
              noLabel
              placeholder="请输入密码"
              field="password"
              initValue=""
              mode="password"></Form.Input>

            <div className="flex gap-2 items-center">
              <Form.Input
                label="验证码"
                noLabel
                placeholder="请输入验证码"
                field="code"
                initValue=""></Form.Input>

              <div
                className="cursor-pointer rounded border"
                onClick={getCaptcha}>
                <img
                  className="h-[30px] w-[100px] object-cover"
                  src={captchaImage}
                />
              </div>
            </div>

            <Button block htmlType="submit">
              {t('login.loginButton')}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
