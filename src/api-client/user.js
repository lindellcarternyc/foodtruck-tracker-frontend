import { axiosWithAuth } from './axiosWithAuth'

export const fetchCurrentUser = async () => {
  try {
    const response = await axiosWithAuth().get(`/api/users/user`)
    const { email, menuratings, roles, truckratings, trucks, userid, username } = response.data

    const userData = {
      username,
      email,
      menuratings,
      role: roles[0].role.name,
      truckratings,
      trucks,
      id: userid
    }

    return userData
  } catch (err) {
    throw err
  }
}

export const updateUser = async () => {

}

export const deleteUser = async () => {

}