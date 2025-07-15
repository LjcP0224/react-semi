import { Form, Button } from '@douyinfe/semi-ui'
import { IconUserCircle, IconLock } from '@douyinfe/semi-icons'
import { login } from '@/api/user'
import type { LoginParams } from '@/api/user'
import type React from 'react'

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
    <div className="w-full h-full flex justify-center items-center">
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
  )
}

export default LoginForm
