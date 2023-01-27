import React, { useRef } from 'react'
import { Form } from '@unform/web'
import { Container, Wrapper, Input, Label, TextContainer, Text, PorcentageContainer, Porcentage, IconContainer } from './styles'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Contracts() {
  const formRef = useRef(null)

  async function handleSubmit(data){}

  return (
    <Container>
        <Wrapper>
            <Form ref={formRef} onSubmit={handleSubmit} style={{'display':'flex', 'gap':'20px', 'alignItems': 'center'}}>
                <Input type='checkbox'/>
                <Label>Título do 1º contrato</Label>
            </Form>
            
            <TextContainer>
                <Text>11002200-01</Text>
            </TextContainer>

            <PorcentageContainer>
                <Porcentage>5%</Porcentage>
            </PorcentageContainer>

            <IconContainer>
                <AiOutlineSearch fill='var(--white)'/>
            </IconContainer>
        </Wrapper>
    </Container>
  ) 
}
