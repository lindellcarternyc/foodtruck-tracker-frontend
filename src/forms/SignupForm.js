import { Formik, Form } from 'formik'
import * as yup from 'yup'

import FormInput from './components/FormInput'
import FormSelect from './components/FormSelect'

const INITIAL_FORM_VALUES = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'DINER'
}

const SIGNUP_FORM_SCHEMA = yup.object().shape({
  username: yup.string()
    .required('Please enter a username')
    .min(5, 'A username must be at least 5 characters long')
    .max(10, 'A username must be 10 characters or less'),
  email: yup.string()
    .required('Please enter your email address')
    .email('Please enter a valid email address'),
  password: yup.string()
    .required('Please enter a password')
    .min(7, 'A password must be at least 7 characters')
    .max(14, 'A password must be 14 characters or less'),
  confirmPassword: yup.string()
    .required('Please re-enter your password')
    .min(7, 'A password must be at least 7 characters')
    .max(14, 'A password must be 14 characters or less')
    .oneOf([yup.ref('password')], 'Your passwords don\'t match'),
  role: yup.string()
    .oneOf(['DINER', 'OPERATOR'])
})


const SignupForm = (props) => {
  const { submit, isLoading } = props
  return (
    <div>
      <h2>Sign Up</h2>
      <Formik 
        initialValues={INITIAL_FORM_VALUES}
        validationSchema={SIGNUP_FORM_SCHEMA}
        onSubmit={submit}
      >
        {({ isValid, touched }) => {
          const isFormValid = isValid && Object.keys(touched).length > 0
          return (
            <Form>
              <FormInput 
                id="username"
                labelText="Username"
              />
  
              <FormInput 
                id="email"
                type="email"
                labelText="Email"
              />
  
              <FormInput 
                id="password"
                type="password"
                labelText="Password"
              />
  
              <FormInput 
                id="confirmPassword"
                type="password"
                labelText="Confirm Password"
              />
  
              <FormSelect 
                id="role"
                labelText="Role"
                options={[
                  { value: 'DINER', label: 'Diner' },
                  { value: 'OPERATOR', label: 'Operator' }
                ]}
              />
              <button disabled={!isFormValid || isLoading} type="submit">Sign Up</button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default SignupForm