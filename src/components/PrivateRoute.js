import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as ROUTES from '../constants/routes'
import * as USER_ROLES from '../constants/user-roles'

const PrivateRoute = ({ component: Component, roles, redirect, exact, path, ...rest }) => {
  const currentUser = useSelector(state => state.user.user)

  const redirectPath = redirect || ROUTES.LOGIN
  const acceptedRoles = roles || [USER_ROLES.OPERATOR, USER_ROLES.DINER]

  return (
    <Route 
      {...rest}
      exact={exact}
      path={path}
      render={(routeProps) => {
        if (!currentUser || !acceptedRoles.includes(currentUser.role)) {
          return <Redirect to={redirectPath} />
        } 
        return <Component {...routeProps} />
      }}
    />
  )
}

export default PrivateRoute