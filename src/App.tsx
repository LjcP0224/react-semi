import { ConfigProvider } from '@douyinfe/semi-ui'
import { RouterProvider } from 'react-router'

import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN'
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US'

import { useAppSelector } from '@/hooks/useStore'
import router from '@/router/index.ts'
import './App.css'
import { useEffect } from 'react'

function App() {
  const local = useAppSelector((state) => state.app.local)
  const theme = useAppSelector((state) => state.app.theme)

  useEffect(() => {
    if (theme === 'dark') {
      document.body.setAttribute('theme-mode', 'dark')
    } else {
      document.body.removeAttribute('theme-mode')
    }
  }, [theme])

  return (
    <>
      <ConfigProvider locale={local === 'zh_CN' ? zh_CN : en_US}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  )
}
export default App
