import { useDispatch } from 'react-redux'

import * as ROUTES from '../constants/routes'

import { createTruck } from '../store/features/trucks'
import CreateTruckForm from '../forms/CreateTruckForm'

const CreateTruckPage = ({ currentUser, history }) => {
  const dispatch = useDispatch()
  const onCancel = () => {

  }

  const onSubmit = (data) => {
    dispatch(createTruck({ ...data, userid: currentUser.id }))
      .then(_ => history.push(ROUTES.HOME))
      .catch(err => console.log('createTruckPage.createTruck.error', err))
  }

  return (
    <div>
      <CreateTruckForm onSubmit={onSubmit} onCancel={onCancel} />
    </div>
  )
}

export default CreateTruckPage