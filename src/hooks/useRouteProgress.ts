import { useNavigationType, useNavigation } from 'react-router'
import { startNProgress, doneNProgress } from '@/utils/nprogress'
import { useEffect } from 'react'

export const useRouteProgress = () => {
  const navigationType = useNavigationType()


  useEffect(() => {
    startNProgress()
    if (navigationType) {
      // 路由导航完成，结束 nprogress
      doneNProgress()
    }
  }, [navigationType])
}
