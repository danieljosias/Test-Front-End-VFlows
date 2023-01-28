import React, { useRef } from 'react';
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Container, Wrapper, TextContainer, Text, Label } from './styles'
import Input from '../Input'
import InvoiceButton from '../InvoiceButton'

export default function Invoice() {
    const formRef = useRef(null)

    async function handleSubmit(data) {
        try {
          formRef.current.setErrors({});
    
          const schema = Yup.object().shape({
            noteNumber: Yup.number().required('Número da Nota Obrigatório'),
            issueDate: Yup.date().required('Data de Emissão Obrigatório'),
            dueDate: Yup.date().required('Data de Vencimento Obrigatório'),
            amount: Yup.decimal().required('Valor Obrigatório'),
            issqn: Yup.number.moreThan(0,'ISSQN” deve ser maior que zero'),
            irrf: Yup.number.moreThan(0,'IRRF” deve ser maior que zero'),
            csll: Yup.number.moreThan(0,'CSLL” deve ser maior que zero'),
            cofins: Yup.number.moreThan(0,'COFINS” deve ser maior que zero'),
            inss: Yup.number.moreThan(0,'INSS” deve ser maior que zero'),
            pis: Yup.number.moreThan(0,'PIS” deve ser maior que zero'),
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
          
        </Wrapper>
    </Container>
  )
}

