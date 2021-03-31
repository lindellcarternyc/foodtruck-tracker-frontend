import { useDispatch, useSelector } from 'react-redux'
import EditUserForm from '../forms/EditUserForm'
import { updateUser } from '../store/features/user'

import * as ROUTES from '../constants/routes';

export default function EditUserPage({ history }) {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    const onSave = (data) => {
      dispatch(updateUser(data))
        .then(res => {
          console.log('onSaveUpdate: ', res)
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