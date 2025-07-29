import { createHistory } from "@tanstack/react-router";
import type { RouteObject } from "react-router";
import { appRoutes } from "./routes/index";
import BaseRouter from "./routes/base";

// 创建初始路由
const initialRoutes = [...appRoutes, ...BaseRouter];

// 默认导出初始路由器
const router = createHistory(initialRoutes);
export default router;
