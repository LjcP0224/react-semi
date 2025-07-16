import { lazy } from 'react'
import type { RouteObject } from 'react-router'

const Home: RouteObject = {
  Component: lazy(() => import('@/layout/index')),
  children: [
    {
      path: '/',
      Component: lazy(() => import('@/views/home/index'))
    }
  ]
}

export default Home
