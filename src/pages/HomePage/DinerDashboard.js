import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTrucks } from '../../store/features/trucks'

import * as ROUTES from '../../constants/routes'

const DinerDashboard = () => {
  const dispatch = useDispatch()
  const trucks = useSelector(state => state.trucksState.trucks)

  useEffect(() => {
    dispatch(getTrucks())
  }, [dispatch])
  return (
    <div>
      <h2>Diner Dashboard</h2>
      {trucks.map(truck => {
        return (
          <div key={truck.truckid}>
            
            <Link to={ROUTES.VIEW_TRUCK.replace(/:truckID/, truck.truckid)}><p>{truck.truckname}</p></Link>
          </div>
        )
      })}
    </div>
  )
}

export default DinerDashboard