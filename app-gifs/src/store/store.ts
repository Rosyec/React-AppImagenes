import { configureStore } from '@reduxjs/toolkit'
import { ImageSlice } from './slices/ImageSlice'

export const store = configureStore({
  reducer: {
    images: ImageSlice.reducer, 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch