import { useHistory } from 'react-router'
import * as ROUTES from '../../constants/routes'

const OperatorTruckPage = (props) => {
  const { truck } = props
  const history = useHistory()
  return (
    <div>
      <h2>Operator View Truck</h2>
      <button onClick={() => history.push(ROUTES.EDIT_TRUCK.replace(/:truckID/, truck.truckid))}>Edit this Truck</button>
      <p>{JSON.stringify(truck)}</p>
    </div>
  )
}

export default OperatorTruckPage