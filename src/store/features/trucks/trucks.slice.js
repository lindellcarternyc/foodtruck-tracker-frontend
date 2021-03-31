import { createSlice } from '@reduxjs/toolkit'

import { getTrucks } from './trucks.thunks'

const INITIAL_TRUCKS_STATE = {
  trucks: [],
  isLoading: false,
  error: null
}

const trucksSlice = createSlice({
  name: 'trucks',
  initialState: INITIAL_TRUCKS_STATE,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(getTrucks.pending, (state) => {
        state.trucks = []
        state.isLoading = true
        state.error = null
      })
      .addCase(getTrucks.fulfilled, (state, action) => {
        state.trucks = action.payload
        state.isLoading = false
        state.error = null
      })
      .addCase(getTrucks.rejected, (state, action) => {
        state.trucks = []
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export default trucksSlice.reducer