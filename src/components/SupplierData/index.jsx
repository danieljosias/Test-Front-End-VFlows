import React, { useContext } from 'react'
import { ContractContext } from '../../contexts/Contracts/contractContext';
import { Container, Wrapper, Left, Right, Text, Span } from './styles'

export default function SupplierData() {
  const { contractData } = useContext(ContractContext);

  const cnpj = localStorage.getItem('cnpj')
  const isContract = contractData.filter((contract) => contract.cnpj === cnpj && contract)

  return (
    <Container>
      {isContract.map((contract, index)=>{  
        return<Wrapper key={index}>
          <>
          <Left>
            <Text><Span>Razão Social:</Span> {contract.razaosocial}</Text>
            <Text><Span>Nome Fantasia:</Span> {contract.nomefantasia}</Text>
          </Left>
          <Right>
            <Text><Span>CNPJ:</Span> {contract.cnpj}</Text>
          </Right>
          </>
        </Wrapper>
      })}
    </Container>
  )
}
