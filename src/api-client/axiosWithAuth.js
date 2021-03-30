import axios from 'axios'
import { getToken } from './utils'

const BASE_URL = process.env.REACT_APP_API_BASE_URL

export const axiosWithAuth = () => {
  const token = getToken()

  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}