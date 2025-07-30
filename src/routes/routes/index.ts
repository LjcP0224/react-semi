import type { Route } from "@tanstack/react-router";
import baseRoute from "./base";
import rootRoute from "../root";

type RouteModule = {
  default: Route | Route[];
};

// 定义 import.meta.glob 返回对象的类型
type RouteModules = Record<string, RouteModule>;

const modules = import.meta.glob("./modules/*.ts", {
  eager: true,
}) as RouteModules;

function formatModules(_modules: RouteModules, result: Route[]) {
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default;
    if (!defaultModule) return;
    const moduleList = Array.isArray(defaultModule)
      ? [...defaultModule]
      : [defaultModule];
    result.push(...moduleList);
  });
  return result;
}

const routeTree: Route[] = formatModules(modules, []);

function getRoutes() {
  rootRoute.addChildren([...baseRoute, ...routeTree]);
}

export { getRoutes };
