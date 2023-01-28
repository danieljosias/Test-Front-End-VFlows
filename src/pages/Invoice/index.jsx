import React from 'react'
import Header from '../../components/Header'
import SupplierData from '../../components/SupplierData'
import Title from '../../components/Title'
import Invoice from '../../components/Invoice'
import Footer from '../../components/Footer'

export default function index() {
  return (
    <>
        <Header/>
        <SupplierData/>
        <Title content='Dados da Nota Fiscal'/>
        <Invoice/>
        <Footer/>
    </>
  )
}
