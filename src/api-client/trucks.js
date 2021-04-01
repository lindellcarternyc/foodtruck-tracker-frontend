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

export const createTruck = async (data) => {
  const newTruck = {
    cuisinetype: data.cuisine,
    menus: []
  }
  try {
    const response = await axiosWithAuth().post(`/api/trucks/truck/add`, newTruck)
    console.log('createTruck.response', response)
  } catch (err) {
    console.log('createTruck.err', err)
  }
}