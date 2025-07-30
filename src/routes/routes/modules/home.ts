import { lazy } from "react";
import { createRoute } from "@tanstack/react-router";
import rootRoute from "@/routes/root";

const PageLayout = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: lazy(() => import("@/layout/index")),
  notFoundComponent: lazy(() => import("@/views/not-found/index")),
});

const homeRoute = createRoute({
  getParentRoute: () => PageLayout,
  path: "/home",
  component: lazy(() => import("@/views/home/index")),
});

// 修改后
const layoutWithChildren = PageLayout.addChildren([homeRoute]);
export default layoutWithChildren;