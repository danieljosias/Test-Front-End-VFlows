import React, { useRef } from 'react';
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Container, Wrapper, TextContainer, Text } from './styles'
import Input from '../InputMask'

export default function Invoice() {
    const formRef = useRef(null)

    async function handleSubmit(data) {
        try {
          formRef.current.setErrors({});
    
          const schema = Yup.object().shape({
            noteNumber: Yup.string().required('CNPJ inválido'),
          });
    
          await schema.validate(data, {
            abortEarly: false,
          });
    
          const isUser = userData.filter((user) => user.cnpj === data.cnpj && user) 
          localStorage.setItem('cnpj',isUser[0].cnpj)
    
          if(isUser.length !== 0){
            navigate('/contracts')
          }else{
            toast.error('CNPJ sem contratos ativos')
          }
    
        } catch (err) {
    
          const validationErrors = {};
    
          if (err instanceof Yup.ValidationError) {
            err.inner.forEach(error => {
              validationErrors[error.path] = error.message;
            });
            formRef.current.setErrors(validationErrors);
          }
        }
    }

  return (
    <Container>
        <Wrapper>
            <TextContainer>
                <Text>Código do Contrato</Text>
                <Text>Título do Contrato</Text>
            </TextContainer>
            <Form ref={formRef} onSubmit={handleSubmit} style={{'display':'flex', 'flexDirection':'column', 'gap':'20px'}}>
                <Input name='noteNumber' label='Número da Nota' type='text'/>
                <Input name='issueDate' label='Data de Emissão' type='date'/>
                <Input name='dueDate' label='Data de Vencimento' type='date'/>
                <Input name='amount' label='Valor' type='text'/>
                <Input name='check' type='checkbox'/>
            </Form>
        </Wrapper>
    </Container>
  )
}

