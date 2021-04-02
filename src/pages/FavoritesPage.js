const FavoritesPage = ({ currentUser }) => {
  return (
    <div>
      <h1>Favorites</h1>
      {currentUser.trucks.map(t => {
        // This is the shape of the data being returned from the api
        return <p key={t.truck.truckid}>{JSON.stringify(t)}</p>
      })}
    </div>
  )
}

export default FavoritesPage