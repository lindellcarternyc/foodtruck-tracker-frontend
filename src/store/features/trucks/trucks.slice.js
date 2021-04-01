import { createSlice } from '@reduxjs/toolkit'

import { getTrucks, createTruck, editTruck } from './trucks.thunks'

const INITIAL_TRUCKS_STATE = {
  trucks: [],
  isLoading: false,
  error: null
}

const trucksSlice = createSlice({
  name: 'trucks',
  initialState: INITIAL_TRUCKS_STATE,
  reducers: {
    setTrucks: (state, action) => {
      state.trucks = action.payload
    }
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
      .addCase(createTruck.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(createTruck.fulfilled, (state, action) => {
        state.error = null
        state.isLoading = false
        state.trucks.push(action.payload)
      })
      .addCase(createTruck.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(editTruck.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(editTruck.fulfilled, (state, action) => {
        console.log('editTruck.fullfilled', action.payload)
      })
      .addCase(editTruck.rejected, (state, action) => {
        
      })
  }
})

export default trucksSlice.reducer

export const { setTrucks } = trucksSlice.actions