import { createRootRoute } from "@tanstack/react-router";
import { lazy } from "react";
const rootRoute = createRootRoute({
  component: lazy(() => import("@/App")),
  notFoundComponent:lazy(() => import("@/views/not-found/index"))
});
export default rootRoute;
