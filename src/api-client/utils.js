export const setToken = (token) => window.localStorage.setItem('food-tracker-token', token)

export const getToken = () => window.localStorage.getItem('food-tracker-token')