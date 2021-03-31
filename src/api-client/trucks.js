import { axiosWithAuth } from './axiosWithAuth'

export const fetchTrucks = async () => {
  try {
    const response = await axiosWithAuth().get(`/api/trucks/trucks`)
    return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const fetchTruckById = async () => {

}