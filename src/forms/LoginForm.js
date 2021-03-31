import { Formik } from 'formik'

import { LOGIN_FORM_SCHEMA } from './form-schema/auth.schema'

import FormInput from './components/FormInput'
import Form from '../components/styled/Form'
import Button from '../components/styled/Button'

const INITIAL_FORM_VALUES = {
  username: '',
  password: ''
}

const LoginForm = ({ onSubmit, isLoading }) => {
  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={INITIAL_FORM_VALUES}
        validationSchema={LOGIN_FORM_SCHEMA}
        onSubmit={onSubmit} 
      >
        {({ isValid, isSubmitting, touched }) => {
          const isDisabled = isLoading || !isValid || isSubmitting || Object.keys(touched).length === 0
          return (
            <Form>
              <FormInput 
                id="username"
                labelText="Username"
              />

              <FormInput 
                id="password"
                labelText="Password"
              />

              <Button type="submit" disabled={isDisabled}>Login</Button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default LoginForm