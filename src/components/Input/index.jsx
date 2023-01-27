import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Container, Input, Label } from './styles'

export default function input({ name, width, height, type, label, ...rest }) {
    const { fieldName, registerField, error } = useField(name)
    const inputRef = useRef(null)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

  return (
    <Container>
        {error ? error : <Label>{label}</Label>}
        <Input
            ref={inputRef}
            props={{width, height}}
            type={type}
            {...rest}
            
        /> 
    </Container>
  )
}
