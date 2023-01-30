import React, { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Wrapper,  Form, Input, Label, TextContainer, Text, PorcentageContainer, Porcentage, ButtonSearch } from './styles'
import { AiOutlineSearch } from 'react-icons/ai'
import { toast } from 'react-toastify'
import ContractListButton from '../ContractListButton'
import { ContractContext } from '../../contexts/Contracts/contractContext'
import { ModalContracts } from '../ModalContracts'

export default function Contracts() {
    const [ check, setCheck ] = useState(false)
    const [ modal, setModal ] = useState(false)
    const { contractData, setRetention, setCode, setTitle } = useContext(ContractContext)
    const navigate = useNavigate()

    const cnpj = localStorage.getItem('cnpj')
    const isContract = contractData.filter((contract) => contract.cnpj === cnpj && contract)
    setRetention(isContract[0].retencao)
    setCode(isContract[0].codigo)
    setTitle(isContract[0].nomecontrato)

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

    const handleOpenModal = () =>{
      setModal(true)
    }

    const handleCloseModal = () =>{
      setModal(false)
    }


  return (
    <Container>
      <ModalContracts modal={modal} handleCloseModal={handleCloseModal}/>
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

            <ButtonSearch onClick={handleOpenModal}>
              <AiOutlineSearch />
            </ButtonSearch>
          </>
        </Wrapper>
        })}
        <ContractListButton backAccess={backAccess} goToInvoice={goToInvoice}/>
    </Container>
  ) 
}
