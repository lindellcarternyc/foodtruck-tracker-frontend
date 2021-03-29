import { useDispatch, useSelector } from 'react-redux'
import LoginForm from '../forms/LoginForm'
import { login } from '../store/features/user/user.slice'

const LoginPage = ({ history }) => {
  const isLoading = useSelector(state => state.user.isLoading)
  const dispatch = useDispatch()

  const onLogin = (data) => {
    dispatch(login(data))
  }

  return (
    <div>
      <h2>Login</h2>
      <LoginForm isLoading={isLoading} submit={onLogin} />
    </div>
  )
}

export default LoginPage