import { useDispatch, useSelector } from 'react-redux'
import LoginForm from '../forms/LoginForm'
import { getCurrentUser, login } from '../store/features/user/user.slice'

import * as ROUTES from '../constants/routes'
import { Redirect } from 'react-router'

const LoginPage = ({ history }) => {
  const isLoading = useSelector(state => state.user.isLoading)
  const dispatch = useDispatch()
  const onLogin = async (data) => {
    dispatch(login(data))
      .then(_ => {
        dispatch(getCurrentUser())
          .then(_ => history.push(ROUTES.HOME))
          .catch(err => console.log(err))
      })
      .catch(err => console.log('err', err))
  }

  const currentUser = useSelector(state => state.user.user !== null)
  if (currentUser) return <Redirect to={ROUTES.HOME}/>

  return (
    <div>
      <LoginForm isLoading={isLoading} submit={onLogin} />
    </div>
  )
}

export default LoginPage