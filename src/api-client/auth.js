import axios from 'axios'
import { fetchCurrentUser } from './user'
// import { ax}
import { setToken } from './utils'

export const register = async ({ username, password, role, email }) => {
  try {
    const response = await axios.post("https://tt42-foodtrucktrackr.herokuapp.com/api/users/user/register",
      { username, password, role, email },
	  )
    setToken(response.data.access_token)
    const user = await fetchCurrentUser()
    return user
  } catch (err) {

  }
}

export const login = async ({ username, password }) => {
  try {
    const response = await axios.post("https://tt42-foodtrucktrackr.herokuapp.com/login",
      `grant_type=password&username=${username}&password=${password}`,
      {headers: {
          // btoa is converting our client id/client secret into base64
          Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    )
    setToken(response.data.access_token)
    const user = await fetchCurrentUser()
    return user
  } catch (err ) {
    console.log('err')
  }
	// ).then(res => {
  //   console.log('LOGIN SUCCESSFUL ... setting token')
  //   setToken(res.data.access_token)
  //   
  // })
  // .catch(err => {
  //   console.log('loginError')
  //   console.dir(err)
  // })
}