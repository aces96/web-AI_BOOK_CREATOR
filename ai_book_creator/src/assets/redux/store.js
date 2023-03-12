import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './slices/book.slice'

export const store = configureStore({
  reducer: {
    bookSlice
  },
})