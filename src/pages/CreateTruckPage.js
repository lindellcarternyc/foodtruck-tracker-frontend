import { useDispatch } from 'react-redux'
import { createTruck } from '../store/features/trucks'
import CreateTruckForm from '../forms/CreateTruckForm'

const CreateTruckPage = () => {
  const dispatch = useDispatch()
  const onCancel = () => {

  }

  const onSubmit = (data) => {
    dispatch(createTruck(data))
      .then(result => console.log('createTruckPage.createTruck.result', result))
      .catch(err => console.log('createTruckPage.createTruck.error', err))
  }

  return (
    <div>
      <CreateTruckForm onSubmit={onSubmit} onCancel={onCancel} />
    </div>
  )
}

export default CreateTruckPage