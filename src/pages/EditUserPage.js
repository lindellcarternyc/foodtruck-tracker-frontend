import { useDispatch, useSelector } from 'react-redux'
import EditUserForm from '../forms/EditUserForm'
import { update } from '../store/features/user/user.slice'

import { USER } from '../constants/routes';

export default function EditUserPage({ history }) {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const onSave = (data) => {
        dispatch(update(data))
    }

    const onCancel = (data) => {
        history.push(USER);
    }

    return (
        <div>
            <EditUserForm />
        </div>
    )
}