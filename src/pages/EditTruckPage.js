import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import EditTruckForm from '../forms/EditTruckForm'
import { truckByIdSelector } from '../store/features/trucks/trucks.selectors'

import { editTruck } from '../store/features/trucks/trucks.thunks'

import * as ROUTES from '../constants/routes'

const EditTruckPage = ({ currentUser, history }) => {
  const params = useParams()
  const dispatch = useDispatch()

  const truck = useSelector(truckByIdSelector(params.truckID))
  
  const onCancel = () =>{

  }

  const onSubmit = (data) => {
    const updateTruckData = {
      truckname: data.truckname,
      cuisinetype: data.cuisine,
      truckid: truck.truckid
    }

    dispatch(editTruck(updateTruckData))
      .then(_ => {
        history.push(ROUTES.VIEW_TRUCK.replace(/:truckID/, truck.truckid))
      })
  }
  return (
    <div>
      <EditTruckForm onSubmit={onSubmit} onCancel={onCancel} truckToEdit={truck} />
    </div>
  )
}

export default EditTruckPage