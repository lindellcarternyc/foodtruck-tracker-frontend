import { axiosWithAuth } from './axiosWithAuth'

export const fetchCurrentUser = async () => {
  try {
    const response = await axiosWithAuth().get(`/api/users/user`)
    const { email, menuratings, roles, truckratings, trucks, userid, username } = response.data
    console.log(response)
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

export const updateUser = async (data) => {
  const { id: userid, ...rest } = data

  const toUpdate = { 
    userid,
    ...rest
  }
  
  try {
    const response = await axiosWithAuth().patch(`/api/users/user/${userid}/update`, toUpdate)
    console.log('api response', response)
  } catch (e) {
    throw e
  }
}

export const deleteUser = async () => {

}

export const favoriteATruck = async ({ trucks, userid }) => {
  try {
    const response = await axiosWithAuth().patch(`/api/users/user/${userid}/update`, { trucks })
    return response.data
  } catch (e) {
    throw e
  }
}

export const toggleFavoriteTruck = async ({ userid, trucks }) => {
  try {
    const response = await axiosWithAuth().patch(`/api/users/user/${userid}/update`, { trucks })
    console.log('toggleFavoriteTruck', response)
    return response.data
  } catch (e) {
    throw e
  }
}