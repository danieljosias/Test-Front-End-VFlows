import React from 'react'
import { Button } from './styles'

export default function button({width, padding, background, color, weight, size, content, type, boxShadow, onClick}) {
  return (
    <Button
        props={{width, padding, background, color, weight, size, boxShadow}}
        type={type}
        onClick={onClick}
    >
      {content}
    </Button>
  )
}
