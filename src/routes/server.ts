import { lazy } from "react";
import { createRoute } from "@tanstack/react-router";

import PageLayout from "@/layout/layout";
const mainRoute = createRoute({
  getParentRoute: () => PageLayout,
  path: "/main",
  component: lazy(() => import("@/views/system/menu/index")),
});
const router = PageLayout.addChildren([mainRoute])

export default router;
