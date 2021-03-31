import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchTrucksById } from '../../api-client'

const OperatorDashboard = () => {
  const currentUser = useSelector(state => state.userState.user)
  const [operatorTrucks, setOperatorTrucks] = useState([])

  useEffect(() => {
    const truckIDs = currentUser.trucks.map(entry => {
      return entry.truck.truckid
    })
    fetchTrucksById(truckIDs)
      .then(trucks => {
        setOperatorTrucks(trucks)
      })
      .catch(err => {
        console.log(err)
      })
  }, [currentUser])

  return (
    <div>
      <h2>Operator Dashboard</h2>
      <div>
        <h3>Operator's Trucks</h3>
        <p>{JSON.stringify(operatorTrucks)}</p>
      </div>
    </div>
  )
}

export default OperatorDashboard