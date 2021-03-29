import { Link, Route, Switch } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFound'

import * as apiClient from './api-client'
import { useEffect } from 'react'

const App = () => {
  // useEffect(() => {
  //   apiClient.register({ username: 'Lambda School', email:'email@test.com', password: 'i<3Lambd4', role: 'diner'})
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }, [])
  return (
    <div className="App">
      <nav>
        <Link to={ROUTES.HOME}>HOME</Link>{' '}
        <Link to={ROUTES.LOGIN}>LOGIN</Link>{' '}
        <Link to={ROUTES.SIGNUP}>SIGNUP</Link>
      </nav>
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.LOGIN} component={LoginPage} />
        <Route exact path={ROUTES.SIGNUP} component={SignupPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
