import axios from 'axios'
import { getToken } from './utils'
import { BASE_URL } from '../constants/api'

export const axiosWithAuth = () => {
  const token = getToken()

  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}