import { Layout, Nav, Avatar } from '@douyinfe/semi-ui'

function NavBar({ show }: { show: boolean }) {
  if (!show) {
    return <div className=" fixed right-0 bottom-52 z-50"></div>
  }

  return (
    <Layout.Header className="bg-[var(--semi-color-fill-0)] fixed top-0 left-0 right-0 z-50 h-16">
      <Nav mode="horizontal">
        <Nav.Header>NYMJ</Nav.Header>
        <Nav.Footer>
          <Avatar>HT</Avatar>
        </Nav.Footer>
      </Nav>
    </Layout.Header>
  )
}

export default NavBar
