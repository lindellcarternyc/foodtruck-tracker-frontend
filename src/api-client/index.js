import axios from 'axios'

export const register = async ({ username, password, role, email }) => {
  // axios.post("https://tt42-foodtrucktrackr.herokuapp.com/api/users/user/register",
	// 	// `grant_type=password&username=${username}&password=${password}`,
  //   { username, password, role, email },
	// 	{headers: {
	// 			// btoa is converting our client id/client secret into base64
	// 			Authorization: `Bearer ${btoa("lambda-client:lambda-secret")}`,
	// 			"Content-Type": "application/x-www-form-urlencoded",
	// 		},
	// 	},
	// )
  // .then(res => {
  //   console.log(res)
  // })
  // .catch(err => {
  //   console.log(err)
  // })
  return {

  }
}

export const login = async (credentials) => {
  // axios.post("https://tt42-foodtrucktrackr.herokuapp.com/login",
	// 	`grant_type=password&username=${credentials.username}&password=${credentials.password}`,
	// 	{headers: {
	// 			// btoa is converting our client id/client secret into base64
	// 			Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
	// 			"Content-Type": "application/x-www-form-urlencoded",
	// 		},
	// 	},
	// )
  // .then(res => {
  //   console.log(res)
  // })
  // .catch(err => {
  //   console.log(err)
  // })
  return {
    
  }
}