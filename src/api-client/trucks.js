import { axiosWithAuth } from './axiosWithAuth'

export const fetchTrucks = async () => {
  try {
    const response = await axiosWithAuth().get(`/api/trucks/trucks`)
    console.log(response)
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const fetchTruckById = async () => {

}