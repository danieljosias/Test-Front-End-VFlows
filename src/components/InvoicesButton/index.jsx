import React from 'react'
import { Container, Wrapper } from './styles'
import Button from '../Button'

export default function InvoicesButton({backToAccess}) {
  return (
    <Container>
      <Wrapper>
        <Button width='250px' padding='5px' background='var(--yellow)' color='var(--white)' weight='bold' size='18px' content='Anterior' onClick={backToAccess}/>
        <Button width='250px' padding='5px' background='var(--green)' color='var(--white)' weight='bold' size='18px' content='Próximo' type='submit'/>
      </Wrapper>
    </Container>
  )
}
