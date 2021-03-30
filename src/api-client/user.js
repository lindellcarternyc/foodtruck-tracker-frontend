import { axiosWithAuth } from './axiosWithAuth'

export const fetchCurrentUser = async () => {
  try {
    const user = await axiosWithAuth().get(`/api/users/user`)
    console.log(user)
  } catch (err) {
    throw err
  }
}