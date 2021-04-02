import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrucks } from '../../store/features/trucks'

import { trucksSelector } from '../../store/features/trucks/trucks.selectors'

import TruckCard from '../../components/TruckCard'
import Container from '../../components/styled/Container'

const DinerDashboard = () => {
  const dispatch = useDispatch()
  const trucks = useSelector(trucksSelector)
  console.log(trucks)

  useEffect(() => {
    dispatch(getTrucks())
  }, [dispatch])
  return (
    <div>
      <Container>
      <h2>Diner Dashboard</h2>
      <div>
        <Container>
  
      {trucks.map(truck => {
        const uiTruck = {
          ...truck,
          currentLocation: {}
        }
        return (
          // <Link to={ROUTES.VIEW_TRUCK.replace(/:truckID/, truck.truckid)} key={truck.truckid}>
            <TruckCard truck={uiTruck} key={truck.truckid}/>
            
          // </Link>
        )
      })}
      </Container>
      </div>
      </Container>
    </div>
  )
}

export default DinerDashboard