import React from 'react'
import { Button } from './styles'

export default function button({width, padding, background, color, weight, size, content, type, onClick}) {
  return (
    <Button
        props={{width, padding, background, color, weight, size}}
        type={type}
        onClick={onClick}
    >
      {content}
    </Button>
  )
}
