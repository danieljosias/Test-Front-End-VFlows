import React, { useContext } from 'react'
import { ContractContext } from '../../contexts/Contracts/contractContext';
import { Container, Wrapper, Left, Right, Text } from './styles'

export default function SupplierData() {
  const { contractData } = useContext(ContractContext);

  const cnpj = localStorage.getItem('cnpj')
  const isContract = contractData.filter((contract) => contract.cnpj === cnpj && contract)

  return (
    <Container>
      {isContract.map((contract, index)=>{  
        return<>
          <Wrapper key={index}>
          <Left>
            <Text>Razão Social: {contract.razaosocial}</Text>
            <Text>Nome Fantasia: {contract.nomefantasia}</Text>
          </Left>
          <Right>
            <Text>CNPJ: {contract.cnpj}</Text>
          </Right>
        </Wrapper>
        </>
      })}
    </Container>
  )
}
