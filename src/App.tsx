import { useEffect, Suspense, useState } from 'react'
import { RouterProvider } from 'react-router'
import { ConfigProvider, Spin } from '@douyinfe/semi-ui'
import { useLocalStorageState } from 'ahooks'

import { useTranslation } from 'react-i18next'
import { defaultLocale } from '@/locale'
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN'
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US'

import { getToken } from '@/utils/auth'
import { getUserInfo } from '@/api/user'
import router from '@/router/index.ts'
import { GlobalContext } from './context'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [lang, setLang] = useLocalStorageState('lang', {
    defaultValue: defaultLocale,
    listenStorageChange: true,
    serializer: (value) => JSON.stringify(value),
    deserializer: (value) => {
      try {
        return JSON.parse(value)
      } catch {
        // 如果解析失败，返回原始值
        return value
      }
    }
  })
  const [theme, setTheme] = useLocalStorageState('theme', {
    defaultValue: 'light',
    listenStorageChange: true,
    serializer: (value) => JSON.stringify(value),
    deserializer: (value) => {
      try {
        return JSON.parse(value)
      } catch {
        // 如果解析失败，返回原始值
        return value
      }
    }
  })

  const { i18n } = useTranslation()

  useEffect(() => {
    if (theme === 'dark') {
      document.body.setAttribute('theme-mode', 'dark')
    } else {
      document.body.removeAttribute('theme-mode')
    }
  }, [theme])

  const fetchUserInfo = () => {
    getUserInfo()
      .then((res) => {
        const { result } = res.data
        localStorage.setItem('userInfo', JSON.stringify(result))
        router.navigate('/')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    if (getToken()) {
      fetchUserInfo()
    } else if (window.location.pathname.replace(/\//g, '') !== 'login') {
      window.location.pathname = '/login'
    } else {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang, i18n])

  return (
    <>
      <ConfigProvider locale={lang === 'zh-CN' ? zh_CN : en_US}>
        <GlobalContext.Provider value={{ lang, setLang, theme, setTheme }}>
          {loading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
              }}>
              <Spin size="large" />
            </div>
          ) : (
            <Suspense
              fallback={
                <Spin
                  size="large"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                  }}
                />
              }>
              <RouterProvider router={router} />
            </Suspense>
          )}
        </GlobalContext.Provider>
      </ConfigProvider>
    </>
  )
}
export default App
