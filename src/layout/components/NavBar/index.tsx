import { useContext } from 'react'
import { Layout, Nav, Avatar, Button } from '@douyinfe/semi-ui'
import { IconSun, IconMoon, IconLanguage } from '@douyinfe/semi-icons'
import { GlobalContext } from '@/context'

function NavBar({ show }: { show: boolean }) {
  const { setLang, lang, theme, setTheme } = useContext(GlobalContext)

  if (!show) {
    return <div className=" fixed right-0 bottom-52 z-50"></div>
  }

  return (
    <Layout.Header className="bg-[var(--semi-color-fill-0)] fixed top-0 left-0 right-0 z-50 h-16">
      <Nav mode="horizontal">
        <Nav.Header>NYMJ</Nav.Header>
        <Nav.Footer>
          <Button
            theme="borderless"
            icon={<IconLanguage />}
            onClick={() =>
              setLang && setLang(lang === 'zh-CN' ? 'en-US' : 'zh-CN')
            }></Button>
          <Button
            theme="borderless"
            icon={theme == 'dark' ? <IconMoon /> : <IconSun />}
            onClick={() =>
              setTheme && setTheme(theme === 'light' ? 'dark' : 'light')
            }></Button>
          <Avatar>HT</Avatar>
        </Nav.Footer>
      </Nav>
    </Layout.Header>
  )
}

export default NavBar
