import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import {getTrucks} from '../store/features/trucks'
import { truckByIdSelector, trucksSelector } from '.././store/features/trucks/trucks.selectors'
import { isFavoriteTruckSelector } from '.././store/features/user/user.selectors'
import { toggleFavorite } from '../store/features/user/user.thunks'
import Container from '../components/styled/Container'
import TruckCard from '../components/TruckCard'


const FavoritesPage = ({ currentUser }) => {
  const { truckID } = useParams()
  // const truck = useSelector(truckByIdSelector(truckID))
  const trucks = useSelector(trucksSelector)

  const dispatch = useDispatch()

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
      <h1>Favorites</h1>
      {trucks.map(truck => {
        // This is the shape of the data being returned from the api
        // return <p key={t.truck.truckid}>{JSON.stringify(t)}</p>
        const uiTruck = {
          ...truck,
          currentLocation: {}
        }
        return <TruckCard truck={uiTruck} key={truck.truckid}  onClickFavorite={onClickFavorite} isFavoriteTruck={isFavoriteTruck(truck.truckid)}/>      
        })}
       </Container> 
    </div>
  )
}

export default FavoritesPage