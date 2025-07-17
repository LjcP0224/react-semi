import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface AppState {
  isLoading: boolean
  local: 'zh_CN' | 'en_US'
  theme: 'light' | 'dark'
}

const initialState: AppState = {
  isLoading: false,
  local: 'zh_CN',
  theme: 'light'
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setLocal(state, action: PayloadAction<'zh_CN' | 'en_US'>) {
      state.local = action.payload
    }
  }
})

export const { setIsLoading, setLocal } = appSlice.actions
export default appSlice.reducer
