import { createRouter } from "@tanstack/react-router";

import routeTree from "./routes";


console.log("routeTree ==> ", routeTree);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

export default router;
