import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrucks } from '../../store/features/trucks'

const DinerDashboard = () => {
  const dispatch = useDispatch()
  const trucks = useSelector(state => state.trucksState.trucks)

  useEffect(() => {
    dispatch(getTrucks())
  }, [dispatch])
  return (
    <div>
      <h2>Diner Dashboard</h2>
      {JSON.stringify(trucks)}
    </div>
  )
}

export default DinerDashboard