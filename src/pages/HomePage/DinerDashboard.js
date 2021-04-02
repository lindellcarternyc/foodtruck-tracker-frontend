import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrucks } from '../../store/features/trucks'

import { trucksSelector } from '../../store/features/trucks/trucks.selectors'
import { isFavoriteTruckSelector } from '../../store/features/user/user.selectors'

import TruckCard from '../../components/TruckCard'
import Container from '../../components/styled/Container'
import { toggleFavorite } from '../../store/features/user/user.thunks'

const DinerDashboard = ({ currentUser} ) => {
  const dispatch = useDispatch()
  const trucks = useSelector(trucksSelector)
  const isFavoriteTruck = useSelector(isFavoriteTruckSelector)

  useEffect(() => {
    dispatch(getTrucks())
  }, [dispatch])

  const onClickFavorite = (truckid) => {
    let newFavorites = [...currentUser.trucks]

    const currentFavorites = currentUser.trucks
    console.log('currentFavorites', currentFavorites)
    if (isFavoriteTruck(truckid)) {
      console.log('remove this truck!!!')
      newFavorites = newFavorites.filter(truckObj => truckObj.truck.truckid != truckid)
    } else {
      newFavorites.push({ truck: { truckid } })
    }
    dispatch(toggleFavorite({ userid: currentUser.id, trucks: newFavorites }))
  }

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
          <TruckCard truck={uiTruck} key={truck.truckid} onClickFavorite={onClickFavorite} isFavoriteTruck={isFavoriteTruck(truck.truckid)}/>
        )
      })}
      </Container>
      </div>
      </Container>
    </div>
  )
}

export default DinerDashboard