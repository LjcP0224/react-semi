import { lazy } from "react";
import { createRoute } from "@tanstack/react-router";
import rootRoute from "@/routes/root";

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: lazy(() => import("@/views/login/index")),
});

export default [loginRoute];
