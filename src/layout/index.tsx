import { Outlet } from 'react-router'
import { Layout, Nav, Avatar } from '@douyinfe/semi-ui'

import { useRouteProgress } from '@/hooks/useRouteProgress'

const LayoutPage = () => {
  useRouteProgress()
  return (
    <Layout className="w-full h-full">
      <Layout.Header className="bg-[var(--semi-color-fill-0)] fixed top-0 left-0 right-0 z-50 h-16">
        <Nav mode="horizontal">
          <Nav.Header>NYMJ</Nav.Header>
          <Nav.Footer>
            <Avatar>HT</Avatar>
          </Nav.Footer>
        </Nav>
      </Layout.Header>
      <Layout className="min-h-screen! min-w-full pt-16">
        <Layout.Content>
          <Outlet />
        </Layout.Content>
        <Layout.Footer>footer</Layout.Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutPage
