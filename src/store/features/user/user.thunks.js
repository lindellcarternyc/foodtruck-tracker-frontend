import { createAsyncThunk } from '@reduxjs/toolkit'
import * as apiClient from '../../../api-client'

export const getCurrentUser = createAsyncThunk('user/getCurrentUser', async () => {
  try {
    const currentUser = await apiClient.fetchCurrentUser()
    return currentUser
  } catch (e) {
    throw e
  }
})

export const register = createAsyncThunk('user/register', async ({ username, email, password, role }) => {
  try {
    const newUser = await apiClient.register({ username, password, role, email })
    return newUser
  } catch (e) {
    throw e
  }
})

export const login = createAsyncThunk('user/login', async ({ username, password }) => {
  try {
    const loggedInUser = await apiClient.login({ username, password })
    return loggedInUser
  } catch (e) {
    throw e
  }
})

export const updateUser = createAsyncThunk('user/update', async (data) => {
  console.log('updateUser: ', data)
})