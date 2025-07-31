import { lazy } from "react";
import { createRoute } from "@tanstack/react-router";
import PageLayout from "@/layout/layout";

const homeRoute = createRoute({
  getParentRoute: () => PageLayout,
  path: "/",
  component: lazy(() => import("@/views/home/index")),
});



// 修改后
const layoutWithChildren = PageLayout.addChildren([homeRoute]);
export default layoutWithChildren;
