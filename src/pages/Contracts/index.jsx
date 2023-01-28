import React from 'react'
import Header from '../../components/Header'
import SupplierData from '../../components/SupplierData'
import Title from '../../components/Title'
import ContractListHeader from '../../components/ContractListHeader'
import Contracts from '../../components/Contracts'
import Footer from '../../components/Footer'
import { Container } from './styles'

export default function index() {
  return (
    <Container>
      <Header/>
      <SupplierData/> 
      <Title content='Contratros Vinculados'/>
      <ContractListHeader/>
      <Contracts/>
      <Footer/>
    </Container>
  )
}
