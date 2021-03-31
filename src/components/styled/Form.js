import React from 'react'
import styled from 'styled-components'
import { Form as FormikForm } from 'formik'

const FormWrapper = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export default function Form(props) {
    const { children, onSubmit, ...rest } = props
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(e)
    }

    return(
        <FormWrapper onSubmit={handleSubmit} {...rest}>
            {children}
        </FormWrapper>
    )
}