import { createRoot } from "react-dom/client";

import { store } from "@/store/index";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import i18n from "@/locale";
import "@/config/axios";
import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App></App>
      </Provider>
    </I18nextProvider>
  </BrowserRouter>
);
