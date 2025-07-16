import { lazy } from 'react'
import type { RouteObject } from 'react-router'

const Base: RouteObject[] = [
  {
    path: '/login',
    Component: lazy(() => import('@/views/login/index'))
  },
  {
    path: '*',
    Component: lazy(() => import('@/views/not-found/index'))
  }
]

export default Base
