import { createAsyncThunk } from '@reduxjs/toolkit'

import * as apiClient from '../../../api-client'

export const getTrucks = createAsyncThunk('trucks/getTrucks', async () => {
  try {
    const trucks = await apiClient.fetchTrucks()
    return trucks
  } catch (err) {
    throw err.message
  }
})

export const createTruck = createAsyncThunk('trucks/createTruck', async (data) => {
  try {
    const createdTruck = await apiClient.createTruck(data)
    console.log(createdTruck)
  } catch (err) {
    throw err.message
  }
})