import { useEffect } from 'react'
import { fetchCurrentUser } from '../api-client/user'

const HomePage = () => {
  useEffect(() => {
    fetchCurrentUser()
    
  }, [])
  return (
    <div>Home Page</div>
  )
}

export default HomePage