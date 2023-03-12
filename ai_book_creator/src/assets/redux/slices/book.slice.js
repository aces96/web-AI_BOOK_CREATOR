import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      return {
        ...state.value,
        value: action.payload
      }
    },
    addBook: (state,action)=>{
        return {
            ...state.value,
            value: [...value, action.payload]
        }
    }
  },
})

export const {setBooks, addBook} = bookSlice.actions

export default bookSlice.reducer