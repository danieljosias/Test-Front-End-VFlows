import React from 'react'
import { Container, Header, Text} from './styles'

export default function ContactListHeader() {
  return (
    <Container>
        <Header>
          <Text>Nome do Contrato</Text>
          <Text>Código do Contrato</Text>
          <Text>Retenção Técnica</Text>
          <Text>Detalhes</Text>
        </Header>
    </Container>
  ) 
}

