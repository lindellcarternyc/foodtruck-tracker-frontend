import { useDispatch } from 'react-redux'
// insert feature for edittruck here
import EditTruckForm from '../forms/EditTruckForm'

const EditTruckPage = () => {
  const dispatch = useDispatch()
  const onCancel = () =>{

  }

  const onSubmit = (data) => {
    // dispatch(edittruckfeature(data))
    // .then(result => console.log(filler, result))
    // .catch(err => console.log(filler, err))
  }
  return (
    <div>
      <EditTruckForm onSubmit={onSubmit} onCancel={onCancel}/>
    </div>
  )
}

export default EditTruckPage