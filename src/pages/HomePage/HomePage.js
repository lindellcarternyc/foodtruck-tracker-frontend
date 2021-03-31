import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'
import * as USER_ROLES from '../../constants/user-roles'

import DinerDashboard from './DinerDashboard'
import OperatorDashboard from './OperatorDashboard'

const HomePage = () => {
  const currentUser = useSelector(state => state.user.user)
  if (!currentUser) {
    return (
      <div>
        <h2>Welcome to Food Truck TrackR</h2>
        <Link to={ROUTES.LOGIN}>LOGIN</Link>
        <Link to={ROUTES.SIGNUP}>SIGNUP</Link>
      </div>
    )
  } else if (currentUser.role === USER_ROLES.DINER) {
    return <DinerDashboard />
  }
  return <OperatorDashboard />
}

export default HomePage