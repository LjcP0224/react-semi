import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routes/index";

const root = createRouter({
  defaultPreload: "intent",
  scrollRestoration: true,
});

root.update({
  routeTree: routeTree,
});

export default root;
