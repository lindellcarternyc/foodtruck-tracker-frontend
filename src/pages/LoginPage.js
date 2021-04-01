import { useDispatch, useSelector } from 'react-redux'
import LoginForm from '../forms/LoginForm'

import { login } from '../store/features/user'
import { isUserStateLoadingSelector } from '../store/features/user/user.selectors'

import * as ROUTES from '../constants/routes'
import { Redirect } from 'react-router'

const LoginPage = ({ history, currentUser }) => {
  const isLoading = useSelector(isUserStateLoadingSelector)

  const dispatch = useDispatch()
  const onLogin = async (data) => {
    dispatch(login(data))
      .then(_ => {
        history.push(ROUTES.HOME)
      })
      .catch(err => console.log('err', err))
  }

  if (currentUser) return <Redirect to={ROUTES.HOME}/>

  return (
    <div>
      <LoginForm isLoading={isLoading} onSubmit={onLogin} />
    </div>
  )
}

export default LoginPage