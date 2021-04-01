import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTrucks } from '../../store/features/trucks'

import * as ROUTES from '../../constants/routes'
import { trucksSelector } from '../../store/features/trucks/trucks.selectors'

import TruckCard from '../../components/TruckCard'

const DinerDashboard = () => {
  const dispatch = useDispatch()
  const trucks = useSelector(trucksSelector)
  console.log(trucks)

  useEffect(() => {
    dispatch(getTrucks())
  }, [dispatch])
  return (
    <div>
      <h2>Diner Dashboard</h2>
      {trucks.map(truck => {
        const uiTruck = {
          ...truck,
          currentLocation: {}
        }
        return (
          <Link to={ROUTES.VIEW_TRUCK.replace(/:truckID/, truck.truckid)}>
            <TruckCard truck={uiTruck} key={truck.truckid}/>
          </Link>
        )
      })}
    </div>
  )
}

export default DinerDashboard