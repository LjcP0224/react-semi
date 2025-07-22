import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { ConfigProvider } from "@douyinfe/semi-ui";
import { useLocalStorageState } from "ahooks";

import { useTranslation } from "react-i18next";
import { defaultLocale } from "@/locale";
import zh_CN from "@douyinfe/semi-ui/lib/es/locale/source/zh_CN";
import en_US from "@douyinfe/semi-ui/lib/es/locale/source/en_US";

import router from "@/router/index.ts";

import { getToken } from "@/utils/auth";
import { getUserInfo } from "@/api/user";
import { GlobalContext } from "./context";
import "./App.css";

function App() {
  const [lang, setLang] = useLocalStorageState("lang", {
    defaultValue: defaultLocale,
    listenStorageChange: true,
  });
  const [theme, setTheme] = useLocalStorageState("theme", {
    defaultValue: "light",
    listenStorageChange: true,
  });

  const { i18n } = useTranslation();

  useEffect(() => {
    if (theme === "dark") {
      document.body.setAttribute("theme-mode", "dark");
    } else {
      document.body.removeAttribute("theme-mode");
    }
  }, [theme]);

  const fetchUserInfo = () => {
    getUserInfo().then((res) => {
      const { result } = res.data;
      localStorage.setItem("userInfo", JSON.stringify(result));
      router.navigate("/");
    });
  };

  useEffect(() => {
    if (getToken()) {
      fetchUserInfo();
    } else if (window.location.pathname.replace(/\//g, "") !== "login") {
      window.location.pathname = "/login";
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <>
      <ConfigProvider locale={lang == "zh-CN" ? zh_CN : en_US}>
        <GlobalContext.Provider value={{ lang, setLang, theme, setTheme }}>
          <RouterProvider router={router} />
        </GlobalContext.Provider>
      </ConfigProvider>
    </>
  );
}
export default App;
