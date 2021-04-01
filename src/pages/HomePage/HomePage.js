import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { currentUserSelector } from '../../store/features/user/user.selectors'

import * as ROUTES from '../../constants/routes'
import * as USER_ROLES from '../../constants/user-roles'

import Container from '../../components/styled/Container'
import Button from '../../components/styled/Button'

import DinerDashboard from './DinerDashboard'
import OperatorDashboard from './OperatorDashboard'



const HomePage = () => {
  const currentUser = useSelector(currentUserSelector)
  const history = useHistory()

  const routeTo = (location) => {
      history.push(location)
  }
  if (!currentUser) {
    return (
      <div>
        <Container>
        <h2>Welcome to Food Truck TrackR</h2>
                    <Button onClick={() => routeTo('/login')}>Log In</Button>
                    <Button onClick={() => routeTo('/signup')}>Sign Up</Button>
        </Container>            
      </div>
    )
  } else if (currentUser.role === USER_ROLES.DINER) {
    return <DinerDashboard />
  }
  return <OperatorDashboard currentUser={currentUser} />
}

export default HomePage