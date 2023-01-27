import React from 'react'
import { Container, TitleContainer, Title } from './styles'

export default function title({content}) {
  return (
    <Container>
      <TitleContainer>
        <Title>{content}</Title>
      </TitleContainer>
    </Container>
  )
}
