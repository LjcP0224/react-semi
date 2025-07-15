import { useNavigationType, useNavigation } from 'react-router'
import { startNProgress, doneNProgress } from '@/utils/nprogress'
import { useEffect } from 'react'

export const useRouteProgress = () => {
  const navigationType = useNavigationType()
  const navigation = useNavigation()
  const navigationState = navigation.state
  useEffect(() => {
    startNProgress()
    if (navigationState === 'idle') {
      // 路由导航完成，结束 nprogress
      doneNProgress()
    }
  }, [navigationType, navigationState])
}
