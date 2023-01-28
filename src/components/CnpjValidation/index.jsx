import React, { useContext, useRef } from 'react';
import { Container, Wrapper, Logo, Title } from './styles'
import { useNavigate } from 'react-router';
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import Input from '../InputMask'
import Button from '../Button'
import logo from '../../assets/logo.png'
import { UserContext } from '../../contexts/Users/userContext';

export default function CnpjValidation() {
    const formRef = useRef(null)
    const navigate = useNavigate()
    const { userData  } = useContext(UserContext);
    
  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        cnpj: Yup.string().required('CNPJ inválido'),
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
            <Logo src={logo}/>
            <Title>Pagamento de fornecedor</Title>
            <Form ref={formRef} onSubmit={handleSubmit} style={{'display':'flex', 'flexDirection':'column', 'gap':'20px'}}>
              <Input name='cnpj' label='CNPJ'/>
              <Button width='280px' padding='5px' background='var(--green)' color='var(--white)' content='Acessar' type='submit'/>
            </Form>
        </Wrapper>
    </Container>
  )
}
