import { ConfigProvider } from '@douyinfe/semi-ui'
import { RouterProvider } from 'react-router'

import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN'
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US'

import useStorage from './utils/useStorage'
import router from '@/router/index.ts'
import './App.css'
import { useEffect } from 'react'

import { GlobalContext } from './context'

function App() {
  const [lang, setLang] = useStorage('lang', 'zh_CN')
  const [theme, setTheme] = useStorage('theme', 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.body.setAttribute('theme-mode', 'dark')
    } else {
      document.body.removeAttribute('theme-mode')
    }
  }, [theme])

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
