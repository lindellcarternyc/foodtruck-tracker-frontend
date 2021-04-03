import { useHistory } from 'react-router'
import * as ROUTES from '../../constants/routes'
import Container from '../../components/styled/Container'
import Button from '../../components/styled/Button'
import TruckCard from '../../components/TruckCard'

const OperatorTruckPage = (props) => {
  const { truck } = props
  const history = useHistory()
  const uiTruck = {
    ...truck,
    currentLocation: {}
  }
  return (
    <div>
      <Container>
      <h2>Operator View Truck</h2>
      {/* <p>{JSON.stringify(truck)}</p> */}
      <TruckCard truck={uiTruck} key={truck.truckid}/>
      <Button onClick={() => history.push(ROUTES.EDIT_TRUCK.replace(/:truckID/, truck.truckid))}>Edit this Truck</Button>
      </Container>
    </div>
  )
}

export default OperatorTruckPage