import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import * as USER_ROLES from '../../constants/user-roles'

import DinerTruckPage from './DinerTruckPage'
import OperatorTruckPage from './OperatorTruckPage'

const TruckPage = ({ history }) => {
  const currentUser = useSelector(state => state.userState.user)
  const { truckID } = useParams()
  const truck = useSelector(state => state.trucksState.trucks.find(truck => truck.truckid === parseInt(truckID)))

  const renderTruckPage = () => {
    if (currentUser.role === USER_ROLES.OPERATOR) {
      return <OperatorTruckPage truck={truck} />
    }
    return <DinerTruckPage truck={truck}/>
  }

  return (
    <div>
      <h1>Truck Page</h1>
      {renderTruckPage()}
    </div>
  )
}

export default TruckPage