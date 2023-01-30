import React, { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Wrapper,  Form, Input, Label, TextContainer, Text, PorcentageContainer, Porcentage, IconContainer } from './styles'
import { AiOutlineSearch } from 'react-icons/ai'
import { toast } from 'react-toastify'
import ContractListButton from '../ContractListButton'
import { ContractContext } from '../../contexts/Contracts/contractContext'

export default function Contracts() {
    const [ check, setCheck ] = useState(false)
    const { contractData } = useContext(ContractContext)
    const navigate = useNavigate()

    const cnpj = localStorage.getItem('cnpj')
    const isContract = contractData.filter((contract) => contract.cnpj === cnpj && contract)
    localStorage.setItem('retention',isContract[0].retencao)
    localStorage.setItem('code',isContract[0].codigo)


    const backAccess = () => {
      navigate('/access')
    } 

    const goToInvoice = () => {
      if(check !== false){
        navigate('/invoice')
      }else{
        toast.error('Selecionar o contrato')
      }
    } 

  return (
    <Container>
        {isContract.map((contract)=>{
          return <Wrapper key={contract.id}>
          <>
            <Form>
              <Input type='checkbox' checked={check} onChange={(e) => setCheck(e.target.checked)}/>
              <Label>{contract.nomecontrato}</Label>
            </Form>
            
            <TextContainer>
                <Text>{contract.codigo}</Text>
            </TextContainer>

            <PorcentageContainer>
                <Porcentage>{contract.retencao}</Porcentage>
            </PorcentageContainer>

            <IconContainer>
                <AiOutlineSearch />
            </IconContainer>
          </>
        </Wrapper>
        })}
        <ContractListButton backAccess={backAccess} goToInvoice={goToInvoice}/>
    </Container>
  ) 
}
