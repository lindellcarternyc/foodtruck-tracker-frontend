import { useDispatch, useSelector } from 'react-redux'
import LoginForm from '../forms/LoginForm'
import { login } from '../store/features/user'

import * as ROUTES from '../constants/routes'
import { Redirect } from 'react-router'

const LoginPage = ({ history }) => {
  const isLoading = useSelector(state => state.userState.isLoading)
  const dispatch = useDispatch()
  const onLogin = async (data) => {
    dispatch(login(data))
      .then(_ => {
        history.push(ROUTES.HOME)
      })
      .catch(err => console.log('err', err))
  }

  const currentUser = useSelector(state => state.userState.user !== null)
  if (currentUser) return <Redirect to={ROUTES.HOME}/>

  return (
    <div>
      <LoginForm isLoading={isLoading} onSubmit={onLogin} />
    </div>
  )
}

export default LoginPage