import type { RouteObject } from 'react-router'

// 定义模块对象的类型
type RouteModule = {
  default: RouteObject | RouteObject[]
}

// 定义 import.meta.glob 返回对象的类型
type RouteModules = Record<string, RouteModule>

const modules = import.meta.glob('./modules/*.ts', {
  eager: true
}) as RouteModules

function formatModules(_modules: RouteModules, result: RouteObject[]) {
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default
    if (!defaultModule) return
    const moduleList = Array.isArray(defaultModule)
      ? [...defaultModule]
      : [defaultModule]
    result.push(...moduleList)
  })
  return result
}

export const appRoutes: RouteObject[] = formatModules(modules, [])
