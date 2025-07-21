import { Outlet } from 'react-router'
import { Layout } from '@douyinfe/semi-ui'

import { useRouteProgress } from '@/hooks/useRouteProgress'

import Navbar from '@/layout/components/NavBar'
const LayoutPage = () => {
  useRouteProgress()
  return (
    <Layout className="w-full h-full">
      <Navbar show={true} />
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
