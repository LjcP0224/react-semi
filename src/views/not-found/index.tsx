import React from 'react'
import { Button } from '@douyinfe/semi-ui'
import { IconArrowLeft } from '@douyinfe/semi-icons'
import { useNavigate } from 'react-router'
import './index.css'

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className="not-found-container">
      <div className="glowing-text">404</div>
      <div className="message">页面未找到</div>
      <div className="scanner"></div>
      <Button
        icon={<IconArrowLeft />}
        onClick={handleGoBack}
        style={{
          marginTop: '2rem',
          backgroundColor: '#64b5f6',
          color: 'white'
        }}>
        返回上一级
      </Button>
    </div>
  )
}

export default NotFoundPage
