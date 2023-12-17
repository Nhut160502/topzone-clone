import { createSlice } from '@reduxjs/toolkit'

const rateSlice = createSlice({
  name: 'rate',
  initialState: {
    active: false,
  },
  reducers: {
    activeRate: (state) => {
      state.active = true
    },
    disActiveRate: (state) => {
      state.active = false
    },
  },
})

export const { activeRate, disActiveRate } = rateSlice.actions
export default rateSlice.reducer
