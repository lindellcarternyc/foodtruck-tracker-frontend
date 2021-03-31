import { useSelector } from 'react-redux'



const UserInfoPage = () => {
  const user = useSelector(state => state.userState.user)

  return (
    <div>
      <h2>User Info</h2>
      <h2>Username: {user.username}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Role: {user.role}</h2>
    </div>
  )
}

export default UserInfoPage