import React from 'react'
import { Button, Lottie } from '@douyinfe/semi-ui'
import { IconArrowLeft } from '@douyinfe/semi-icons'
import { useNavigate } from 'react-router'

import animationData from '@/views/not-found/Racooon-404.json'

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className=" w-full h-full min-h-screen flex justify-center items-center flex-col">
      <div className="w-96 h-96">
        <Lottie
          params={{
            animationData: animationData
          }}
          width="100%"
          height="100%"
        />
      </div>
      <Button icon={<IconArrowLeft />} onClick={handleGoBack} type="primary">
        返回上一级
      </Button>
    </div>
  )
}

export default NotFoundPage
