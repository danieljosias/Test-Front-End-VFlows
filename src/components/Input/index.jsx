import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Container, Label, Input } from './styles'

export default function input({ width, height, background, name, type, label, ...rest }) {
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
        <Input 
            props={{width, height, background}}
            ref={inputRef}
            type={type}
            {...rest} 
        /> 
    </Container>
  )
}
