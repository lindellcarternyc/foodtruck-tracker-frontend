import React from 'react'

import * as ROUTES from '../constants/routes'


import Button from '../components/styled/Button'
import Container from '../components/styled/Container'


const UserInfoPage = ({ currentUser, history }) => {
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
        <h2>Username: {currentUser.username}</h2>
        <h2>Email: {currentUser.email}</h2>
        <h2>Role: {currentUser.role}</h2>
        <Button type="button" onClick={logout}>Logout</Button>
        <Button type="button" onClick={()=> routeTo(ROUTES.EDIT_USER)}>Edit User</Button>
      </Container>
    </div>
  )
}

export default UserInfoPage