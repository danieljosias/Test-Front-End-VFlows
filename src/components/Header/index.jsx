import React from 'react'
import { Header, Logo, Title,} from './styles'
import logo from '../../assets/logo.png'

export default function header() {
  return (
    <Header>
      <Logo src={logo} alt='logo do site'/>
      <Title>Pagamento de Fornecedor</Title>
    </Header>
  )
}
