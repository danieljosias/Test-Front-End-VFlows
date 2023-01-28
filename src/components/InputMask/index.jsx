import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Container, Label } from './styles'
import InputMask from 'react-input-mask'

export default function input({ name, type, label, ...rest }) {
    const { fieldName, registerField, error } = useField(name)
    const inputRef = useRef(null)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField])

  return (
    <Container>
        {error ? error : <Label>{label}</Label>}
        <InputMask 
            ref={inputRef}
            type={type}
            {...rest} 
            mask="99.999.999/9999-99"
            style={{'width':'280px','height':'30px'}} 
        /> 
    </Container>
  )
}
