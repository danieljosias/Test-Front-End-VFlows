import React from 'react'
import Header from '../../components/Header'
import SupplierData from '../../components/SupplierData'
import Title from '../../components/Title'
import ContractListHeader from '../../components/ContractListHeader'

export default function index() {
  return (
    <>
      <Header/>
      <SupplierData/> 
      <Title content='Contratros Vinculados'/>
      <ContractListHeader/>
    </>
  )
}
