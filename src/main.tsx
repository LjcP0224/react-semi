import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { store } from '@/store/index'
import { Provider } from 'react-redux'

import '@/config/axios'
import './index.css'

import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </StrictMode>
)
