import { createBrowserRouter } from 'react-router'

import { appRoutes } from './routes/index'
import BaseRouter from './routes/base'

const router = createBrowserRouter([...appRoutes, ...BaseRouter])

export default router
