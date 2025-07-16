import { lazy } from 'react'
import type { RouteObject } from 'react-router'

const Login: RouteObject = {
  path: '/login',
  Component: lazy(() => import('@/views/login/index'))
}

export default Login
