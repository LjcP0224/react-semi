import { ConfigProvider } from '@douyinfe/semi-ui'
import { RouterProvider } from 'react-router'
import { useLocalStorageState } from 'ahooks'

import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN'
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US'

import { getToken } from '@/utils/auth'
import { getUserInfo } from '@/api/user'

import { defaultLocale } from '@/locale'

import router from '@/router/index.ts'
import './App.css'
import { useEffect } from 'react'

import { GlobalContext } from './context'

function App() {
  const [lang, setLang] = useLocalStorageState('lang', {
    defaultValue: defaultLocale,
    listenStorageChange: true
  })
  const [theme, setTheme] = useLocalStorageState('theme', {
    defaultValue: 'light',
    listenStorageChange: true
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.body.setAttribute('theme-mode', 'dark')
    } else {
      document.body.removeAttribute('theme-mode')
    }
  }, [theme])

  const fetchUserInfo = () => {
    getUserInfo().then((res) => {
      const { result } = res.data
      localStorage.setItem('userInfo', JSON.stringify(result))
    })
  }

  useEffect(() => {
    if (getToken()) {
      fetchUserInfo()
      router.navigate('/')
    } else if (window.location.pathname.replace(/\//g, '') !== 'login') {
      window.location.pathname = '/login'
    }
  }, [])

  return (
    <>
      <ConfigProvider locale={lang === 'zh_CN' ? zh_CN : en_US}>
        <GlobalContext.Provider value={{ lang, setLang, theme, setTheme }}>
          <RouterProvider router={router} />
        </GlobalContext.Provider>
      </ConfigProvider>
    </>
  )
}
export default App
