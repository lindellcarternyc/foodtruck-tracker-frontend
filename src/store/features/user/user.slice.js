import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import * as apiClient from '../../../api-client'

const INITIAL_USER_STATE = {
  user: null,
  error: null,
  isLoading: false
}

export const register = createAsyncThunk('user/register', async ({ username, password, role }) => {
  try {
    const newUser = await apiClient.register({ username, password, role })
    return newUser
  } catch (e) {
    throw e
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_USER_STATE,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
        state.user = null
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
        state.error = null
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
        state.error = action.payload
      })
  }
})

export default userSlice.reducer