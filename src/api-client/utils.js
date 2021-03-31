export const setToken = (token) => window.localStorage.setItem('food-tracker-token', token)

export const getToken = () => {
  const token = window.localStorage.getItem('food-tracker-token')
  return token
}