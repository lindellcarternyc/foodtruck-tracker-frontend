import { useParams } from 'react-router-dom'

import EditMenuItemForm from '../forms/EditMenuItemForm'

const EditMenuItemPage = ({ history }) => {
  const { truckID, menuID } = useParams()
  
  return (
    <div>
      <EditMenuItemForm/>
    </div>
  )
}

export default EditMenuItemPage