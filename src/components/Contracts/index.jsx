import React, { useContext, useRef } from 'react'
import { Form } from '@unform/web'
import { Container, Wrapper, Input, Label, TextContainer, Text, PorcentageContainer, Porcentage, IconContainer } from './styles'
import { AiOutlineSearch } from 'react-icons/ai'
import { ContractContext } from '../../contexts/Contracts/contractContext'

export default function Contracts() {
  const formRef = useRef(null)

  async function handleSubmit(data){}

    const { contractData } = useContext(ContractContext);

    const cnpj = localStorage.getItem('cnpj')
    const isContract = contractData.filter((contract) => contract.cnpj === cnpj && contract)

  return (
    <Container>
        {isContract.map((contract)=>{
          return <Wrapper key={contract.id}>
          <>
            <Form ref={formRef} onSubmit={handleSubmit} style={{'display':'flex', 'gap':'20px', 'alignItems': 'center'}}>
                <Input type='checkbox'/>
                <Label>{contract.nomecontrato}</Label>
            </Form>
            
            <TextContainer>
                <Text>{contract.codigo}</Text>
            </TextContainer>

            <PorcentageContainer>
                <Porcentage>{contract.retencao}</Porcentage>
            </PorcentageContainer>

            <IconContainer>
                <AiOutlineSearch fill='var(--white)' style={{'cursor':'pointer'}}/>
            </IconContainer>
          </>
        </Wrapper>
        })}
    </Container>
  ) 
}
