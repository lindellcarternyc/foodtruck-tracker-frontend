import { createSlice } from '@reduxjs/toolkit'

import { register, login, getCurrentUser } from './user.thunks'

const INITIAL_USER_STATE = {
  user: null,
  error: null,
  isLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_USER_STATE,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false
        state.error = null
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.error = null
        state.isLoading = false
        state.user = action.payload
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
        state.error = action.payload
      })
  }
})

export default userSlice.reducer