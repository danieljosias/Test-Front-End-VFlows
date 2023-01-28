import React, { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Wrapper,  Form, Input, Label, TextContainer, Text, PorcentageContainer, Porcentage, IconContainer } from './styles'
import { AiOutlineSearch } from 'react-icons/ai'
import { ContractContext } from '../../contexts/Contracts/contractContext'
import { toast } from 'react-toastify'
import ContractListButton from '../ContractListButton'
import { UserContext } from '../../contexts/Users/userContext'

export default function Contracts() {
    const [ check, setCheck ] = useState(false)

    const navigate = useNavigate()

    const { contractData } = useContext(ContractContext);
    const { userData } = useContext(UserContext);

    const isContract = contractData.filter((contract) => contract.cnpj === userData[0].cnpj && contract)

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
