import { useDispatch, useSelector } from 'react-redux'
import { register } from '../store/features/user/user.slice'

const SignupPage = () => {
  const isLoading = useSelector(store => store.user.isLoading)
  const request = () => {
    
  }
  return (
    <div>Signup Page</div>
    // FORM is 
  )
}

export default SignupPage