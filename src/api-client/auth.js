import axios from 'axios'

export const register = async ({ username, password, role, email }) => {
  axios.post("https://tt42-foodtrucktrackr.herokuapp.com/api/users/user/register",
    { username, password, role, email },
	)
  .then(res => {
    console.log(res)
    return res
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
    window.localStorage.setItem('food-tracker-token', res.data.access_token)
  })
  .catch(err => {
    console.log(err)
  })
}