import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import * as ROUTES from '../constants/routes'


import Button from '../components/styled/Button'
import Container from '../components/styled/Container'


const UserInfoPage = () => {
  const user = useSelector(state => state.userState.user)

  const history = useHistory()

  const routeTo = (location) => {
    history.push(location)
  }
  const logout = () => {
    localStorage.removeItem('food-tracker-token');
    window.location.reload();
  };
  
  return (
    <div>
      <Container>
        <h2>User Info</h2>
        <h2>Username: {user.username}</h2>
        <h2>Email: {user.email}</h2>
        <h2>Role: {user.role}</h2>
        <Button type="button" onClick={logout}>Logout</Button>
        <Button type="button" onClick={()=> routeTo(ROUTES.EDIT_USER)}>Edit User</Button>
      </Container>
    </div>
  )
}

export default UserInfoPage