import { createBrowserRouter } from 'react-router'

import { lazy } from 'react'

import { appRoutes } from './routes/index'

const router = createBrowserRouter([
  ...appRoutes,
  {
    Component: lazy(() => import('@/layout/index')),
    children: [
      {
        path: '*',
        Component: lazy(() => import('@/views/not-found/index'))
      }
    ]
  }
])

export default router
