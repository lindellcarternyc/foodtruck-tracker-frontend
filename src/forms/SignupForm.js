import { Formik } from 'formik'
import { SIGNUP_FORM_SCHEMA } from './form-schema/auth.schema'

import Form from '../components/styled/Form'
import Button from '../components/styled/Button'
import FormInput from './components/FormInput'
import FormSelect from './components/FormSelect'

const INITIAL_FORM_VALUES = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'DINER'
}


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
              <Button disabled={!isFormValid || isLoading} type="submit">Sign Up</Button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default SignupForm