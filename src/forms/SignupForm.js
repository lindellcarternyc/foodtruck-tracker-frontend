import React, { useEffect, useState } from 'react';
import * as yup from 'yup'
const INITIAL_FORM_VALUES = {
    username: '',
    email: '',
    password: ''
}
const INITIAL_FORM_ERRORS = {
    username: '',
    email: '',
    password: ''
}
const schema = yup.object().shape({
    username: yup.string().required('required'),
    email: yup.string().required('required'),
    password: yup.string().required('required')
})
export default function LoginForm(props) {
    const { submit, isLoading } = props
    const [values, setValues] = useState(INITIAL_FORM_VALUES)
    const [errors, setErrors] = useState(INITIAL_FORM_ERRORS)
    const [disabled, setDisabled] = useState(true)
    const onSubmit = e => {
        e.preventDefault()
        schema.validate(values)
            .then(_ => {
                submit(values);
                setValues(INITIAL_FORM_VALUES)
                setErrors(INITIAL_FORM_ERRORS)
            })
            .catch(err => {
                console.error(err)
            })
    }
    const onChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        yup.reach(schema, name)
            .validate(value)
            .then(_ => {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [name]: err.errors[0]
                })
                    setDisabled(true)
            })
    }
    useEffect(() => {
        schema.validate(values)
            .then(isValid => setDisabled(!isValid))
            .catch(err => console.log(err))
    })
    return(
        <div>
            <h1>Sign Up</h1>
            {props.isLoading ? (
                <div>loading...</div>
            ) : (
                <form className='form container' onSubmit={onSubmit}>
                    <input
                        onChange={onChange}
                        value={values.username}
                        name='username'
                        type='text'
                        error={errors.username}
                        labelText='Username'
                    />
                    <input
                        onChange={onChange}
                        value={values.email}
                        name='email'
                        type='email'
                        error={errors.email}
                        labelText='Email'
                    />
                    <input
                        onChange={onChange}
                        value={values.password}
                        name='password'
                        type='password'
                        error={errors.password}
                        labelText='Password'
                    />
                    <button
                        children='Submit'
                        variant={disabled ? 'disabled' : 'success'}
                        size='normal'
                    />
                </form>
            )}
        </div>
    );
}