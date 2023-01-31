import React from 'react'
import { Container } from './styles'
import Header from '../../components/Header'
import SupplierData from '../../components/SupplierData'
import Title from '../../components/Title'
import Invoices from '../../components/Invoices'
import Footer from '../../components/Footer'

export default function index() {
  return (
    <Container>
        <Header/>
        <SupplierData/>
        <Title content='Dados da Nota Fiscal'/>
        <Invoices/>
        <Footer/>
    </Container>
  )
}
