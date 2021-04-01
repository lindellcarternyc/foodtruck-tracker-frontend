// import { useDispatch, useSelector } from 'react-redux'
// import EditUserForm from '../forms/EditUserForm'
// import { updateUser } from '../store/features/user'

import CreateMenuItemForm from '../forms/CreateMenuItemForm'
import Container from '../components/styled/Container'

const CreateMenuItemPage = () => {
  return (
    <div>
      <Container>
        <CreateMenuItemForm/>
      </Container>
    </div>
  )
}

export default CreateMenuItemPage