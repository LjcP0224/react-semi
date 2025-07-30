import { useEffect, useState, type ReactNode } from "react";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { ConfigProvider, Spin } from "@douyinfe/semi-ui";
import { useLocalStorageState } from "ahooks";

import { useTranslation } from "react-i18next";
import { defaultLocale } from "@/locale";
import zh_CN from "@douyinfe/semi-ui/lib/es/locale/source/zh_CN";
import en_US from "@douyinfe/semi-ui/lib/es/locale/source/en_US";

import { getToken } from "@/utils/auth";
import { getUserInfo } from "@/api/user";
import { useRouteProgress } from "@/hooks/useRouteProgress";

import { GlobalContext } from "./context";
import "./App.css";

// 在单独的文件中创建路由守卫
const AuthGuard = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const fetchUserInfo = () => {
    getUserInfo()
      .then((res) => {
        const { result } = res.data;
        localStorage.setItem("userInfo", JSON.stringify(result));
        navigate({
          to: "/",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (getToken()) {
      fetchUserInfo();
    } else if (!window.location.pathname.includes("/login")) {
      navigate({
        to: "/login",
        replace: true,
      });
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);
  if (loading) return <Spin />;
  return children;
};

function App() {
  useRouteProgress();
  const [lang, setLang] = useLocalStorageState("lang", {
    defaultValue: defaultLocale,
    listenStorageChange: true,
    serializer: (value) => JSON.stringify(value),
    deserializer: (value) => {
      try {
        return JSON.parse(value);
      } catch {
        // 如果解析失败，返回原始值
        return value;
      }
    },
  });

  const [theme, setTheme] = useLocalStorageState("theme", {
    defaultValue: "light",
    listenStorageChange: true,
    serializer: (value) => JSON.stringify(value),
    deserializer: (value) => {
      try {
        return JSON.parse(value);
      } catch {
        // 如果解析失败，返回原始值
        return value;
      }
    },
  });

  const { i18n } = useTranslation();

  useEffect(() => {
    if (theme === "dark") {
      document.body.setAttribute("theme-mode", "dark");
    } else {
      document.body.removeAttribute("theme-mode");
    }
  }, [theme]);
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <>
      <GlobalContext.Provider value={{ lang, setLang, theme, setTheme }}>
        <ConfigProvider locale={lang === "zh-CN" ? zh_CN : en_US}>
          <AuthGuard>
            <Outlet />
          </AuthGuard>
        </ConfigProvider>
      </GlobalContext.Provider>
    </>
  );
}
export default App;
