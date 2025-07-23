import { createBrowserRouter } from 'react-router'
import type { RouteObject } from 'react-router'
import { useState } from 'react'
import { appRoutes } from './routes/index'
import BaseRouter from './routes/base'

// 创建初始路由
const initialRoutes = [...appRoutes, ...BaseRouter]

// 创建动态路由钩子
export function useDynamicRoutes() {
  const [routes, setRoutes] = useState<RouteObject[]>(initialRoutes)
  const router = createBrowserRouter(routes)

  // 动态添加路由方法
  const addRoutes = (newRoutes: RouteObject[]) => {
    setRoutes([...routes, ...newRoutes])
  }

  return { router, addRoutes }
}

// 默认导出初始路由器
const router = createBrowserRouter(initialRoutes)
export default router
