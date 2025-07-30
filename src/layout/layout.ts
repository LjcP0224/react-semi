import { lazy } from "react";
import { createRoute, redirect } from "@tanstack/react-router";
import rootRoute from "@/routes/root";

const PageLayout = createRoute({
  id: "pageLayout",
  getParentRoute: () => rootRoute,
  component: lazy(() => import("@/layout/index")),
  loader: () => {
    redirect({
      to: "/",
    });
  },
});

export default PageLayout;
