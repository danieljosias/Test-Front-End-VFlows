import React from 'react'
import { Container, Footer, Logo, Text } from './styles'
import logo from '../../assets/logo.png'

export default function footer() {
  return (
    <Container>
        <Footer>
            <Logo src={logo} alt='logo do site' />
            <Text>&#169; 2022-2022 Construindo Patrimônios</Text>
        </Footer>
    </Container>
  ) 
}

