import axios from 'axios'
import { getToken } from './utils'
import { BASE_URL } from '../constants/api'

export const axiosWithAuth = () => {
  const token = getToken()

  console.log('axiosWithAuth')
  console.log('token', token)
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}