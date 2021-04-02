import { createSlice } from '@reduxjs/toolkit'

import { register, login, getCurrentUser, updateUser, toggleFavorite } from './user.thunks'

const INITIAL_USER_STATE = {
  user: null,
  error: null,
  isLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_USER_STATE,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
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
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.user = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        state.user = null
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
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
        state.error = null
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = null
      })
      .addCase(toggleFavorite.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        console.log('toggleFavorite.fulfilled', state, action)
        state.isLoading = false
      })
      .addCase(toggleFavorite.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export default userSlice.reducer

export const { setError, setIsLoading, setUser } = userSlice.actions