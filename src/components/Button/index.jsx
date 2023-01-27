import React from 'react'
import { Button } from './styles'

export default function button({width, padding, background, color, content, type, onClick}) {
  return (
    <Button
        props={{width, padding, background, color}}
        type={type}
        onClick={onClick}
    >
      {content}
    </Button>
  )
}
