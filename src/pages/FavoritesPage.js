import TruckCard from '../components/TruckCard'

const FavoritesPage = ({ currentUser }) => {
  return (
    <div>
      <h1>Favorites</h1>
      {currentUser.trucks.map(t => {
        // This is the shape of the data being returned from the api
        return <p key={t.truck.truckid}>{JSON.stringify(t)}</p>
        // return <TruckCard key={t.truck.truckid} truck={t}/>      
        })}
    </div>
  )
}

export default FavoritesPage