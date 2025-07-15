import { lazy } from 'react'
import type { RouteObject } from 'react-router'

const Login: RouteObject = {
  Component: lazy(() => import('@/layout/index')),
  children: [
    {
      path: '/login',
      Component: lazy(() => import('@/views/login/index'))
    }
  ]
}

export default Login
