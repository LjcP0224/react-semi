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
      <Button onClick={() =>  navigate('/main')}>main</Button>
      <DatePicker />
    </>
  )
}

export default HomePage
