import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import * as USER_ROLES from '../../constants/user-roles'
import { truckByIdSelector } from '../../store/features/trucks/trucks.selectors'

import DinerTruckPage from './DinerTruckPage'
import OperatorTruckPage from './OperatorTruckPage'

const TruckPage = ({ currentUser }) => {
  const { truckID } = useParams()
  const truck = useSelector(truckByIdSelector(truckID))

  const renderTruckPage = () => {
    if (currentUser.role === USER_ROLES.OPERATOR) {
      return <OperatorTruckPage truck={truck} />
    }
    return <DinerTruckPage truck={truck} currentUser={currentUser} />
  }

  return (
    <div>
      <h1>Truck Page</h1>
      {renderTruckPage()}
    </div>
  )
}

export default TruckPage