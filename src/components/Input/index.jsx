import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Input, Label } from './styles'

export default function input({ name, width, height, type, label }) {
    const { fieldName, registerField } = useField(name)
    const inputRef = useRef(null)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

  return (
    <>
        <Label>{label}</Label>
        <Input
            ref={inputRef}
            props={{width, height}}
            type={type}
        /> 
    </>
  )
}
