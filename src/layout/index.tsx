import { Outlet } from 'react-router'
import { Layout, Nav, Avatar } from '@douyinfe/semi-ui'

import { useRouteProgress } from '@/hooks/useRouteProgress'

const LayoutPage = () => {
  useRouteProgress()
  return (
    <Layout className="w-full h-full">
      <Layout.Header className="bg-[var(--semi-color-fill-0)]">
        <Nav mode="horizontal">
          <Nav.Header>header</Nav.Header>
          <Nav.Footer>
            <Avatar>HT</Avatar>
          </Nav.Footer>
        </Nav>
      </Layout.Header>
      <Layout>
        <Layout.Sider className="bg-[var(--semi-color-bg-1)]">
          <Nav style={{ maxWidth: 220, height: '100%' }}>
            <Nav.Header>header</Nav.Header>
            <Nav.Footer collapseButton={true}></Nav.Footer>
          </Nav>
        </Layout.Sider>

        <Layout>
          <Layout.Content>
            <Outlet />
          </Layout.Content>
          <Layout.Footer>footer</Layout.Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutPage
