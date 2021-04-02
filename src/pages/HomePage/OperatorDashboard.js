import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrucks, fetchTrucksById } from '../../api-client'
import { setTrucks } from '../../store/features/trucks'

import * as ROUTES from '../../constants/routes'
import * as USER_ROLES from '../../constants/user-roles'

import { useHistory } from 'react-router'
import { trucksSelector } from '../../store/features/trucks/trucks.selectors'

const OperatorDashboard = ({ currentUser }) => {
  const trucks = useSelector(trucksSelector)
  const history = useHistory()
  const dispatch = useDispatch()

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
      <h2>Operator Dashboard</h2>
      <div>
        <h3>Operator's Trucks</h3>
        {trucks.map(truck => {
          return (
            <div key={truck.truckid}>
              <button onClick={() => history.push(ROUTES.VIEW_TRUCK.replace(/:truckID/, truck.truckid))}>View Truck {truck.truckname}</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OperatorDashboard