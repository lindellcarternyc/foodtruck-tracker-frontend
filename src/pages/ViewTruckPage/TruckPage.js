import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import * as USER_ROLES from '../../constants/user-roles'
import { truckByIdSelector, trucksSelector } from '../../store/features/trucks/trucks.selectors'

import DinerTruckPage from './DinerTruckPage'
import OperatorTruckPage from './OperatorTruckPage'

import Container from '../../components/styled/Container'

const TruckPage = ({ currentUser }) => {
  const { truckID } = useParams()
  const truck = useSelector(truckByIdSelector(truckID))
  const trucks = useSelector(trucksSelector)

  const renderTruckPage = () => {
    if (currentUser.role === USER_ROLES.OPERATOR) {
      return <OperatorTruckPage truck={truck} />
    }
    return <DinerTruckPage trucks={trucks} truck={truck} currentUser={currentUser} />
  }

  return (
    <div>
      <Container>
      <h1>Truck Page</h1>
      {renderTruckPage()}
      </Container>
    </div>
  )
}

export default TruckPage