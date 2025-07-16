import { Form, Button } from '@douyinfe/semi-ui'
import { IconUserCircle, IconLock } from '@douyinfe/semi-icons'
import { login } from '@/api/user'
import type { LoginParams } from '@/api/user'
import React from 'react'


const LoginForm = () => {
  const handleSubmit = (
    values: LoginParams,
    event: React.FormEvent<HTMLFormElement> | undefined
  ) => {
    console.log('event ==> ', event)
    login({
      ...values
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      <div className=" border border-[var(--semi-color-fill-0)] flex justify-center items-center ">
        <div className="w-96 h-96">
          一个登录页
        </div>
        <div className=" p-6">
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

            <Button block htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
