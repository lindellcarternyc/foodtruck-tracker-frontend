import { Formik, Form } from 'formik'
import FormInput from './components/FormInput'
import { LOGIN_FORM_SCHEMA } from './form-schema/auth.schema'

const INITIAL_FORM_VALUES = {
  username: '',
  password: ''
}

const LoginForm = ({ submit, isLoading }) => {
  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={INITIAL_FORM_VALUES}
        validationSchema={LOGIN_FORM_SCHEMA}
        onSubmit={submit} 
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

              <button type="submit" disabled={isDisabled}>Login</button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default LoginForm