import { createBrowserRouter } from 'react-router'
// import { startNProgress, doneNProgress } from '@/utils/nprogress'

import { appRoutes } from './routes/index'

const router = createBrowserRouter([...appRoutes])

// router.subscribe((state) => {
//   console.log('state ==>', state)
//   if (state.navigation.state == 'idle') {
//     doneNProgress()
//   } else {
//     startNProgress()
//   }
// })

export default router
