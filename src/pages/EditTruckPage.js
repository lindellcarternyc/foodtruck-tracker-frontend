import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import EditTruckForm from '../forms/EditTruckForm'

const EditTruckPage = ({ currentUser }) => {
  const params = useParams()
  
  const truck = useSelector(state => state.trucksState.trucks.find(tr => tr.truckid === parseInt(params.truckID)))
  console.log(truck)
  const dispatch = useDispatch()
  const onCancel = () =>{

  }

  const onSubmit = (data) => {
    console.log(data)
    // dispatch(edittruckfeature(data))
    // .then(result => console.log(filler, result))
    // .catch(err => console.log(filler, err))
  }
  return (
    <div>
      <EditTruckForm onSubmit={onSubmit} onCancel={onCancel} truckToEdit={truck} />
    </div>
  )
}

export default EditTruckPage