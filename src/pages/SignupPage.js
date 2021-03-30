import { useDispatch, useSelector } from 'react-redux'
import { register } from '../store/features/user/user.slice'

import SignupForm from '../forms/SignupForm'

const SignupPage = () => {
  const isLoading = useSelector(store => store.user.isLoading)
  const dispatch = useDispatch()
  const onSignup = async (data) => {
    dispatch(register(data))
      .then(res => {
        console.log(res.payload)
      })
      .catch(err => {
        console.log(err)
      })
      
  }

  return (
    <div>
      <SignupForm isLoading={isLoading} submit={onSignup} />
    </div>
  )
}

export default SignupPage