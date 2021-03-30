import * as yup from 'yup'

const USERNAME_SCHEMA = yup.string()
  .required('Please enter a username')
  .min(3, 'A username must be at least 3 characters long')
  .max(10, 'A username must be 10 characters or less')

const PASSWORD_SCHEMA = yup.string()
  .required('Please enter a password')
  .min(7, 'A password must be at least 7 characters')
  .max(14, 'A password must be 14 characters or less')

const EMAIL_SCHEMA = yup.string()
  .required('Please enter your email address')
  .email('Please enter a valid email address')

const CONFIRM_PASSWORD_SCHEMA = yup.string()
  .required('Please re-enter your password')
  .min(7, 'A password must be at least 7 characters')
  .max(14, 'A password must be 14 characters or less')
  .oneOf([yup.ref('password')], 'Your passwords don\'t match')

const ROLE_SCHEMA = yup.string()
  .oneOf(['DINER', 'OPERATOR'])

const BASE_AUTH_SCHEMA = {
  username: USERNAME_SCHEMA,
  password: PASSWORD_SCHEMA
}

export const SIGNUP_FORM_SCHEMA = yup.object().shape({
  ...BASE_AUTH_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  confirmPassword: CONFIRM_PASSWORD_SCHEMA,
  role: ROLE_SCHEMA
})

export const LOGIN_FORM_SCHEMA = yup.object().shape({
  ...BASE_AUTH_SCHEMA
})