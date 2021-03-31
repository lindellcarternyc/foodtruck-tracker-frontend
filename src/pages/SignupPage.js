import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as ROUTES from '../constants/routes'
import { getCurrentUser, register } from '../store/features/user'

import SignupForm from '../forms/SignupForm'

const SignupPage = ({ history }) => {
  const isLoading = useSelector(store => store.user.isLoading)
  const dispatch = useDispatch()
  const onSignup = async (data) => {

    try {
      await dispatch(register(data))
      await dispatch(getCurrentUser())
      history.push(ROUTES.HOME)
    } catch (err) {
      console.log(err)
    }
  }

  const currentUser = useSelector(state => state.user.user !== null)
  if (currentUser) return <Redirect to={ROUTES.HOME}/>

  return (
    <div>
      <SignupForm isLoading={isLoading} submit={onSignup} />
    </div>
  )
}

export default SignupPage