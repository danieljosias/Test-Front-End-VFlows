import React, { useState, useContext } from 'react'
import { ContractContext } from '../../contexts/Contracts/contractContext';
import { UserContext } from '../../contexts/Users/userContext';
import { Container, Wrapper, Left, Right, Text, Span } from './styles'

export default function SupplierData() {
  const { contractData } = useContext(ContractContext);
  const { cnpj } = useContext(UserContext);

  const isContract = contractData.filter((contract) => contract.cnpj === cnpj && contract);
  const [ contracts ] = isContract
  
  return (
    <Container>
      <Wrapper>
        <>
        <Left>
          <Text><Span>Razão Social:</Span> {contracts.razaosocial}</Text>
          <Text><Span>Nome Fantasia:</Span> {contracts.nomefantasia}</Text>
        </Left>
        <Right>
          <Text><Span>CNPJ:</Span> {cnpj}</Text>
        </Right>
        </>
      </Wrapper>
    </Container>
  )
}
