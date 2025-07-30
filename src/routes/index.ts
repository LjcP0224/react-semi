import { createRouter } from "@tanstack/react-router";

import { getRoutes } from "./routes/index";
import routeTree from "./root";

getRoutes();

const router = createRouter({
  defaultPreload: "intent",
  scrollRestoration: true,
});

router.update({
  routeTree: routeTree,
});

export default router;
