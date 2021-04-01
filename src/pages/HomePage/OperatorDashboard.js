import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrucksById } from '../../api-client'
import { setTrucks } from '../../store/features/trucks'

const OperatorDashboard = ({ currentUser }) => {
  const trucks = useSelector(state => state.trucksState.trucks)
  const dispatch = useDispatch()

  useEffect(() => {
    const truckIDs = currentUser.trucks.map(entry => {
      return entry.truck.truckid
    })
    fetchTrucksById(truckIDs)
      .then(trucks => {
        dispatch(setTrucks(trucks))
      })
      .catch(err => {
        console.log(err)
      })
  }, [currentUser, dispatch])

  return (
    <div>
      <h2>Operator Dashboard</h2>
      <div>
        <h3>Operator's Trucks</h3>
        <p>{JSON.stringify(trucks)}</p>
      </div>
    </div>
  )
}

export default OperatorDashboard