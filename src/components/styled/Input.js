import React from 'react'
import styled from 'styled-components'

import InputLabel from './InputLabel'

export const InputWrapper = styled.div`
    width: ${props => props.theme.inputWidth};
    margin-bottom: ${props => props.theme.space};

    input, select {
        border-radius: ${props => props.theme.borderRadius};
        border: ${props => (
            props.error
                ? props.theme.inputErrorBorder
                : 'none'
        )};
        background-color: ${props => props.theme.inputGrey};
        color: ${props => props.theme.inputTextGrey};
        font-size: ${props => props.theme.fontSize};
        width: ${props => props.theme.inputWidth};
        height: ${props => props.theme.inputHeight};
        padding: ${props => props.theme.inputFieldPadding};
        outline: none;

        &:focus {
            border: ${(props) => (
                props.error 
                    ? props.theme.inputErrorBorder 
                    : `2px solid ${props.theme.borderGrey}`
            )};
        }
    }
`



export default function TextInput(props) {
    const { onChange, value, name, type, error, labelText, onBlur } = props
    return (
        <InputWrapper error={error}>
            <InputLabel labelText={labelText} name={name} error={error} />
            <input name={name} onChange={onChange} value={value} type={type} onBlur={onBlur} />
        </InputWrapper>
    )
}
