import { Formik, Form } from 'formik';
import FormInput from './components/FormInput'

const INITIAL_FORM_VALUES = {
    // Get from state
    username: 'dummyUsername',
    email: 'dummyemail@email.com',
    newPassword: 'dummyPassword',
    confirmNewPassword: 'dummyPassword',
    password: '',
}

export default function EditUserForm(props) {
    const { submit, isLoading } = props
    return (
        <div>
            <h2>Edit User</h2>
            <Formik 
                initialValues={INITIAL_FORM_VALUES}
                validationSchema={/* Schema here */}
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
                            <button disabled={isLoading} type="button" onClick={/* push to /user */}>Cancel</button>

                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}
