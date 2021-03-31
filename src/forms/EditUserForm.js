import { Formik, Form } from 'formik';
import FormInput from './components/FormInput'
import { EDIT_USER_FORM_SCHEMA } from './form-schema/auth.schema'

export default function EditUserForm(props) {
    const { onSubmit, onCancel, userToEdit: { username, email }, isLoading } = props
    return (
        <div>
            <h2>Edit User</h2>
            <Formik 
                initialValues={{
                  username,
                  email,
                  newPassword: '',
                  confirmNewPassword: ''
                }}
                validationSchema={EDIT_USER_FORM_SCHEMA}
                onSubmit={onSubmit}
            >
                {({ isValid, touched, errors }) => {
                    // I think this is the one form where touched doesn't have to happen
                    const isFormValid = isValid  // && Object.keys(touched).length > 0
                    console.group('Edit User Form Logs')
                      console.log('isValid', isValid)
                      console.log('touched', touched)
                      console.log('errors', errors)
                    console.groupEnd()
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
                                id="newPassword"
                                type="password"
                                labelText="New Password"
                            />
                
                            <FormInput 
                                id="confirmNewPassword"
                                type="password"
                                labelText="Confirm New Password"
                            />

                            <FormInput 
                                id="password"
                                type="password"
                                labelText="Enter Password*"
                            />
                
                            <button disabled={!isFormValid || isLoading} type="submit">Save Info</button>
                            <button disabled={isLoading} type="button" onClick={onCancel}>Cancel</button>

                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}
