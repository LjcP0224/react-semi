import { lazy } from "react";
import { createRoute } from "@tanstack/react-router";
import rootRoute from "@/routes/index";
import PageLayout from "@/layout/layout";
import routeTree from "./root";

function getServerRoutes() {
  PageLayout.addChildren([
    createRoute({
      getParentRoute: () => PageLayout,
      path: "/main",
      component: lazy(() => import("@/views/system/menu/index")),
    }),
  ]);
  routeTree.addChildren([PageLayout]);
  console.log("getServerRoutes.routeTree ==> ", routeTree);
  rootRoute.update({
    routeTree: routeTree,
  });
  console.log("getServerRoutes.rootRoute ==> ", rootRoute);

}

export { getServerRoutes };
