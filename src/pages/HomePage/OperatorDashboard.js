import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrucks, fetchTrucksById } from '../../api-client'
import { setTrucks } from '../../store/features/trucks'

import * as ROUTES from '../../constants/routes'
import * as USER_ROLES from '../../constants/user-roles'

import { useHistory } from 'react-router'
import { trucksSelector } from '../../store/features/trucks/trucks.selectors'

import Container from '../../components/styled/Container'
import Button from '../../components/styled/Button'

const OperatorDashboard = ({ currentUser, routeTo, history }) => {
  const dispatch = useDispatch()
  const trucks = useSelector(trucksSelector)
  // const history = useHistory()

  useEffect(() => {
    if (currentUser.role === USER_ROLES.DINER) {
      return
    }

    const ownedTruckIds = currentUser.trucks.map(({ truck }) => truck.truckid)
    fetchTrucksById(ownedTruckIds)
      .then(ownedTrucks => {
        dispatch(setTrucks(ownedTrucks))
      })
  }, [dispatch, currentUser])

  return (
    <div>
      <Container>
      <h2>Operator Dashboard</h2>


        <h3>Operator's Trucks</h3>
        <p>{console.log(trucks)}</p>
        {trucks.map(truck => {
          return (
            <div key={truck.truckid}>
              <Button onClick={() => routeTo(ROUTES.VIEW_TRUCK.replace(/:truckID/, truck.truckid))}>View Truck {truck.truckname}</Button>
            </div>
          )
        })}


      </Container>
    </div>

  )
}

export default OperatorDashboard