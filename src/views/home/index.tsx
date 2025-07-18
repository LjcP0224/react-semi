import { Button } from '@douyinfe/semi-ui'
import { useNavigate } from 'react-router'
import { DatePicker } from '@douyinfe/semi-ui'

const HomePage = () => {
  const navigate = useNavigate()

  const login = () => {
    navigate('/login')
  }
  return (
    <>
      <Button onClick={login}>Login</Button>
      <DatePicker />
    </>
  )
}

export default HomePage
