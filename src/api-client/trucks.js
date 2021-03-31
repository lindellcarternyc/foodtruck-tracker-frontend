import { axiosWithAuth } from './axiosWithAuth'

export const fetchTrucks = async () => {
  try {
    const response = await axiosWithAuth().get(`/api/trucks/trucks`)
    return response.data
  } catch (err) {
    throw err
  }
}

export const fetchTruckById = async (truckID) => {
  try {
    const response = await axiosWithAuth().get(`/api/trucks/truck/${truckID}`)
    return response.data
  } catch (err) {
    throw err
  }
}

export const fetchTrucksById = async (truckIDs) => {
  try {
    const truckRequests = truckIDs.map(fetchTruckById)
    const trucks = await Promise.all(truckRequests)
    return trucks
  } catch (err) {
    throw err
  }
}