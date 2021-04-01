import { useDispatch, useSelector } from 'react-redux'
import EditUserForm from '../forms/EditUserForm'
import { updateUser } from '../store/features/user'

import * as ROUTES from '../constants/routes';

export default function EditUserPage({ history, currentUser }) {
    const user = useSelector(state => state.userState.user)
    const dispatch = useDispatch()

    const onSave = (data) => {
      const toUpdate = {
        ...currentUser,
        ...data
      }
      dispatch(updateUser(toUpdate))
        .then(_ => {
          history.push(ROUTES.USER_INFO)
        })
        .catch(err => {
          console.log('onSaveUpateErr: ', err)
        })
    }

    const onCancel = () => {
        history.push(ROUTES.USER_INFO);
    }

    return (
        <div>
            <EditUserForm userToEdit={user} onSubmit={onSave} onCancel={onCancel} />
        </div>
    )
}