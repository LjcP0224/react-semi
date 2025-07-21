function Navbar({ show }: { show: boolean }) {
  if (!show) {
    return <div className=" fixed right-0 bottom-52 z-50"></div>
  }

  return <div>a</div>
}

export default Navbar
