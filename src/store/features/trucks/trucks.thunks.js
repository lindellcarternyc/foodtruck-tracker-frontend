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