import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Container, Wrapper, TextContainer, Text, Label, InputFileLabel, FieldSet, TaxesRetention, TechnicalRetention, Invoices, Checkbox } from './styles'
import Input from '../Input'
import InvoiceButton from '../InvoiceButton'
import { BsFillTrashFill } from 'react-icons/bs'

export default function Invoice() {
    const formRef = useRef(null)
    const navigate = useNavigate()
    const [ check, setCheck ] = useState(false)

    async function handleSubmit(data) {
        try {
          formRef.current.setErrors({});
    
          const schema = Yup.object().shape({
            noteNumber: Yup.number().required('Número da Nota Obrigatório'),
            issueDate: Yup.date().required('Data de Emissão Obrigatório'),
            dueDate: Yup.date().required('Data de Vencimento Obrigatório'),
            amount: Yup.number().positive().integer().required('Valor Obrigatório'),
            issqn: Yup.number.integer(2).required('ISSQN” deve ser maior que zero'),
            irrf: Yup.number.integer(2).required('IRRF” deve ser maior que zero'),
            csll: Yup.number.integer(2).required('CSLL” deve ser maior que zero'),
            cofins: Yup.number.integer(2).required('COFINS” deve ser maior que zero'),
            inss: Yup.number.integer(2).required('INSS” deve ser maior que zero'),
            pis: Yup.number.integer(2).required('PIS” deve ser maior que zero'),
            value: Yup.number.integer(2).required('PIS” deve ser maior que zero'),
            percentage: Yup.number.integer(2).required('PIS” deve ser maior que zero'),
            file: Yup.file(),
          });
    
          await schema.validate(data, {
            abortEarly: false,
          });

          console.log('Solicitação 999999');
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

  return (
    <Container>
        <Wrapper>
          <TextContainer>
            <Text>Código do Contrato:</Text>
            <Text>Título do Contrato</Text>
          </TextContainer>

          <Form ref={formRef} onSubmit={handleSubmit} style={{'display':'flex', 'flexWrap':'wrap', 'gap':'20px'}}>
            <Input name='noteNumber' label='Número da Nota' type='text' width='223px' height=''/>
            <Input name='issueDate' label='Data de Emissão' type='date' width='223px' height=''/>
            <Input name='dueDate' label='Data de Vencimento' type='date' width='223px' height=''/>
            <Input name='amount' placeholder='R$' label='Valor' type='text' width='223px' height=''/>
            
           {/*  Se clicar. motrar o componente abaixo */}
           {/* checked={check} onChange={(e) => setCheck(e.target.checked) */}
           {/* passar check para dentro do component e no styled components deixar display none, caso o check seja false */}
            {/* retencao de impostos */}
            <TaxesRetention>
              <Checkbox>
                <Input name='check' type='checkbox' width='' height=''/>
                <Label>Retenção de Impostos</Label>
              </Checkbox>

              <FieldSet>
                <Input name='issqn' label='ISSQN' type='text' width='140px' height=''/>
                <Input name='irrf' label='IRRF' type='text' width='140px' height=''/>
                <Input name='csll' label='CSLL' type='text' width='140px' height=''/>
                <Input name='cofins' label='COFINS' type='text' width='140px' height=''/>
                <Input name='inss' label='INSS' type='text' width='140px' height=''/>
                <Input name='pis' label='PIS' type='text' width='140px' height=''/>
              </FieldSet>
            </TaxesRetention> 

            {/* retencao de tecnicas */}
            <TechnicalRetention>
              <Checkbox>
                <Input name='check' type='checkbox' width='' height=''/>
                <Label>Retenção Técnicas</Label>
              </Checkbox>

              {/* campo “Valor”, valor deve ter sido calculado baseado no percentual de retenção do contrato; */}
              {/* campo “Percentual”, valor deve ser o percentual de retenção técnica do contrato; */}
              <FieldSet>
                <Input name='value' label='Valor' placeholder='R$'  type='text' width='460px' height='25px'  background='var(--grey-3)'/>
                <Input name='percentage' label='Percentual' type='text' width='460px' height='25px'  background='var(--grey-3)'/>
              </FieldSet>
            </TechnicalRetention>

            {/* anexar notas fiscais */}
            <Invoices>
              <InputFileLabel>Anexar Nota Fiscal</InputFileLabel>
              {/* <Input name='file' type='file' label='Data de Vencimento' accept=".pdf*" multiple />  */}
              <BsFillTrashFill></BsFillTrashFill>
            </Invoices>
          </Form>
          <InvoiceButton backToAccess={backToAccess}/>
        </Wrapper>
    </Container>
  )
}

