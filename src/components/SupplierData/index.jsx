import React from 'react'
import { Container, Wrapper, Left, Right, Text } from './styles'

export default function SupplierData() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Text>Razão Social: </Text>
          <Text>Nome Fantasia: </Text>
        </Left>
        <Right>
          <Text>CNPJ: </Text>
        </Right>
      </Wrapper>
    </Container>
  )
}
