import React, { useRef, useState } from 'react';
import * as Yup from 'yup'
import { useNavigate } from 'react-router';
import { Container, Logo, Title } from './styles'
import { Form } from '@unform/web'
import Input from '../Input'
import Button from '../Button'
import logo from '../../assets/logo.png'

export default function CnpjValidation() {
    const formRef = useRef(null)
    const navigate = useNavigate()
    const [ user, setUser ] = useState(["cnpj","50684630000109"])

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        cnpj: Yup.string().min(14).required('CNPJ inválido'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
        //data.cnpj
        //criar a função login(data.cnpf){}
        //Realizar uma pesquisa em um array users, através de uma função login, utilizando como parâmetro o CNPJ informado.
        //Caso a consulta retorne os dados do CNPJ, abrir a tela Contratos Vinculados.
        //navigate('/')
        //Caso a consulta não retorne os dados do CNPJ, enviar mensagem ao usuário: “CNPJ sem contratos ativos.”
    } catch (err) {

      const validationErrors = {};

      // Validation failed
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
        <Logo src={logo}/>
        <Title>Pagamento de fornecedor</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name='cnpj' width='280px' height='30px' type='' label='CNPJ'/>
            <Button width='280px' padding='5px' background='var(--green)' color='var(--white)' content='Acessar' type='submit'/>
        </Form>
    </Container>
  )
}
