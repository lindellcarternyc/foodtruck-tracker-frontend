import { useDispatch, useSelector } from 'react-redux'
import { register } from '../store/features/user/user.slice'

import SignupForm from '../forms/SignupForm'

const SignupPage = () => {
  const isLoading = useSelector(store => store.user.isLoading)
  const dispatch = useDispatch()
  const onSignup = (data) => {
    dispatch(register(data))
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <SignupForm isLoading={isLoading} submit={onSignup} />
    </div>
    // FORM is 
  )
}

export default SignupPage