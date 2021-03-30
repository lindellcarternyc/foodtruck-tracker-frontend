import { useDispatch, useSelector } from 'react-redux'
import LoginForm from '../forms/LoginForm'
import { login } from '../store/features/user/user.slice'

import * as ROUTES from '../constants/routes'

const LoginPage = ({ history }) => {
  const isLoading = useSelector(state => state.user.isLoading)
  const dispatch = useDispatch()

  const onLogin = async (data) => {
    dispatch(login(data))
      .then(_ => history.push(ROUTES.HOME))
      .catch(err => console.log('err', err))
  }

  return (
    <div>
      <LoginForm isLoading={isLoading} submit={onLogin} />
    </div>
  )
}

export default LoginPage