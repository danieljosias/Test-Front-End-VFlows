import React, { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Container, Wrapper, TextContainer, Span, Text, InputFile, Label, FieldSet, TaxesRetention, TechnicalRetention, Invoices, Checkbox, Total, Title, Value, Percentual, Trash, TitleContainer } from './styles'
import Input from '../Input'
import InvoicesButton from '../InvoicesButton'
import { BsFillTrashFill } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { ContractContext } from '../../contexts/Contracts/contractContext';

export default function Invoice() {
    const formRef = useRef(null)
    const inputRef = useRef(null)
    const navigate = useNavigate()
    const [ checkOne, setCheckOne ] = useState(false)
    const [ checkTwo, setCheckTwo ] = useState(false)
    const [ amount, setAmount ] = useState()
    const [ total, setTotal ] = useState()
    const { retention, code, title } = useContext(ContractContext)

    async function handleSubmit(data) {
        try {
          formRef.current.setErrors({});
    
          const schema = Yup.object().shape({
            noteNumber: Yup.number().typeError('Número da Nota Obrigatório'),
            issueDate: Yup.date().typeError('Data de Emissão Obrigatório'),
            dueDate: Yup.date().typeError('Data de Vencimento Obrigatório'),
            amount: Yup.number().typeError('Valor Obrigatório'),
            issqn: Yup.number().moreThan(0).typeError('Ser maior que zero'),
            irrf: Yup.number().moreThan(0).typeError('Ser maior que zero'),
            csll: Yup.number().moreThan(0).typeError('Ser maior que zero'),
            cofins: Yup.number().moreThan(0).typeError('Ser maior que zero'),
            inss: Yup.number().moreThan(0).typeError('Ser maior que zero'),
            pis: Yup.number().moreThan(0).typeError('Ser maior que zero'),
          });
    
          await schema.validate(data, {
            abortEarly: false,
          });;

          toast.success('Solicitação 999999 foi enviada com sucesso.');
          navigate('/access')
          console.log(data)
  
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
      setTotal(Math.round(parseFloat(amount) * parseFloat(retention)/100))
    }

    useEffect(() => {
      calculateRetention()
    },[amount])

  return (
    <Container>
        <Wrapper>
        <TextContainer>
            <Text><Span>Código do Contrato: </Span>{code}</Text>
            <Text><Span>Título do Contrato: </Span>{title}</Text>
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
                <Input name='issqn' label='ISSQN' type='text' width='130px'/>
                <Input name='irrf' label='IRRF' type='text' width='140px'/>
                <Input name='csll' label='CSLL' type='text' width='140px'/>
                <Input name='cofins' label='COFINS' type='text' width='140px'/>
                <Input name='inss' label='INSS' type='text' width='140px'/>
                <Input name='pis' label='PIS' type='text' width='130px'/>
              </FieldSet>
              }
            </TaxesRetention> 

            <TechnicalRetention>
              <Checkbox>
                <Input name='check' type='checkbox' checked={checkTwo} onChange={(e) => setCheckTwo(e.target.checked)} onClick={calculateRetention}/>
                <Label>Retenção Técnica</Label>
              </Checkbox>

                {checkTwo && 
                  <Total>
                    <TitleContainer>
                      <Title>Valor</Title>
                      {total ? <Value>R$ {total}</Value> : <Value></Value>}
                    </TitleContainer>
                    
                    <TitleContainer>
                      <Title>Percentual</Title>
                      <Percentual>{retention}</Percentual>
                    </TitleContainer>
                  </Total>
                } 
            </TechnicalRetention>

            <Invoices>
              <InputFile ref={inputRef} type='file' multiple/>
              <Trash onClick={clearFile}>
                <BsFillTrashFill fill='var(--white)'></BsFillTrashFill>
              </Trash>
            </Invoices>

            <InvoicesButton backToAccess={backToAccess}/>
          </Form>
        </Wrapper>
    </Container>
  )
}

