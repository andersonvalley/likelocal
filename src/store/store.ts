import { configureStore } from '@reduxjs/toolkit'
import citySlice from './slices/citySlice'
import placeSlice from './slices/placeSlice'

export const store = configureStore({
  reducer: {
    city: citySlice,
    place: placeSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
