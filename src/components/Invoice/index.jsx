import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Container, Wrapper, TextContainer, Text, InputFile, Label, FieldSet, TaxesRetention, TechnicalRetention, Invoices, Checkbox, Total, Title, Value, Percentual } from './styles'
import Input from '../Input'
import InvoiceButton from '../InvoiceButton'
import { BsFillTrashFill } from 'react-icons/bs'
import { toast } from 'react-toastify'

export default function Invoice() {
    const formRef = useRef(null)
    const inputRef = useRef(null)
    const navigate = useNavigate()
    const [ checkOne, setCheckOne ] = useState(false)
    const [ checkTwo, setCheckTwo ] = useState(false)
    const [ amount, setAmount ] = useState()
    const [ total, setTotal ] = useState()
    const retention = localStorage.getItem('retention')

    async function handleSubmit(data) {
        try {
          formRef.current.setErrors({});
    
          const schema = Yup.object().shape({
            noteNumber: Yup.string().required('Número da Nota Obrigatório'),
            issueDate: Yup.string().required('Data de Emissão Obrigatório'),
            dueDate: Yup.string().required('Data de Vencimento Obrigatório'),
            amount: Yup.string().required('Valor Obrigatório'),
            issqn: Yup.number().moreThan(0).required('Ser maior que zero'),
            irrf: Yup.number().moreThan(0).required('Ser maior que zero'),
            csll: Yup.number().moreThan(0).required('Ser maior que zero'),
            cofins: Yup.number().moreThan(0).required('Ser maior que zero'),
            inss: Yup.number().moreThan(0).required('Ser maior que zero'),
            pis: Yup.number().moreThan(0).required('Ser maior que zero'),
            value: Yup.string(),
            percentage: Yup.string(),
            file: Yup.string(),
          });
    
          await schema.validate(data, {
            abortEarly: false,
          });;

          toast.success('Solicitação 999999');
          navigate('/access')
  
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

    const backToAccess = () =>{
      navigate('/contracts')
    }

    const clearFile = () => {
      inputRef.current.value = null
    }

    const calculateRetention = () => {
      setTotal(Math.round(parseFloat(amount)/parseFloat(retention)))
    }

  return (
    <Container>
        <Wrapper>
          <TextContainer>
            <Text>Código do Contrato:</Text>
            <Text>Título do Contrato</Text>
          </TextContainer>

          <Form ref={formRef} onSubmit={handleSubmit} style={{'display':'flex', 'flexWrap':'wrap', 'gap':'20px'}}>
            <Input name='noteNumber' label='Número da Nota' type='text' width='223px'/>
            <Input name='issueDate' label='Data de Emissão' type='date' width='223px'/>
            <Input name='dueDate' label='Data de Vencimento' type='date' width='223px'/>
            <Input name='amount' label='Valor' type='text' width='223px' onChange={(e) => setAmount(e.target.value)}/>
          
            <TaxesRetention>
              <Checkbox>
                <Input name='check' type='checkbox' checked={checkOne} onChange={(e) => setCheckOne(e.target.checked)} />
                <Label>Retenção de Impostos</Label>
              </Checkbox>

              {checkOne && 
              <FieldSet>
                <Input name='issqn' label='ISSQN' type='text' width='140px'/>
                <Input name='irrf' label='IRRF' type='text' width='140px'/>
                <Input name='csll' label='CSLL' type='text' width='140px'/>
                <Input name='cofins' label='COFINS' type='text' width='140px'/>
                <Input name='inss' label='INSS' type='text' width='140px'/>
                <Input name='pis' label='PIS' type='text' width='140px'/>
              </FieldSet>
              }
            </TaxesRetention> 

            <TechnicalRetention>
              <Checkbox>
                <Input name='check' type='checkbox' checked={checkTwo} onChange={(e) => setCheckTwo(e.target.checked)} onClick={calculateRetention}/>
                <Label>Retenção Técnicas</Label>
              </Checkbox>

                {checkTwo && 
                  <Total>
                    <Title>Valor</Title>
                    {total ? <Value>{total}</Value> : <Value></Value>}
                    
                    <Title>Percentual</Title>
                    <Percentual>{retention}</Percentual>
                  </Total>
                } 
            </TechnicalRetention>

            <Invoices>
              <InputFile name='file' ref={inputRef} type='file' accept=".pdf*" multiple/>
              <BsFillTrashFill onClick={clearFile}></BsFillTrashFill>
            </Invoices>

            <InvoiceButton backToAccess={backToAccess}/>
          </Form>
        </Wrapper>
    </Container>
  )
}

