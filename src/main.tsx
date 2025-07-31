import { createRoot } from "react-dom/client";

import { store } from "@/store/index";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import i18n from "@/locale";
import "@/config/axios";
import "./index.css";

import { RouterProvider } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import router from "./routes";

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} />
    </Provider>
  </I18nextProvider>
);
