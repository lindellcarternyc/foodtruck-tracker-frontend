import axios from 'axios'
import { setToken } from './utils'

export const register = async ({ username, password, role, email }) => {
  axios.post("https://tt42-foodtrucktrackr.herokuapp.com/api/users/user/register",
    { username, password, role, email },
	)
  .then(res => {
    setToken(res.data.access_token)
  })
  .catch(err => {
    console.log(err)
  })
}

export const login = async ({ username, password }) => {
  axios.post("https://tt42-foodtrucktrackr.herokuapp.com/login",
		`grant_type=password&username=${username}&password=${password}`,
		{headers: {
				// btoa is converting our client id/client secret into base64
				Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
				"Content-Type": "application/x-www-form-urlencoded",
			},
		},
	).then(res => {
    console.log('LOGIN SUCCESSFUL ... setting token')
    setToken(res.data.access_token)
    console.log('login', 'res', res)
  })
  .catch(err => {
    console.log('loginError')
    console.dir(err)
  })
}