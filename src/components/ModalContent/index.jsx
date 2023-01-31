import React, { useContext } from 'react'
import { ModalHeader, Title, ModalBody, Span, Text, ButtonClose } from './styles'
import { ContractContext } from '../../contexts/Contracts/contractContext'
import { UserContext } from '../../contexts/Users/userContext'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function ModalContent({handleCloseModal}) {
    const { contractData } = useContext(ContractContext)
    const { cnpj } = useContext(UserContext)

    const isContract = contractData.filter((contract) => contract.cnpj === cnpj && contract)

  return (
    <div>
      <ModalHeader>
        <Title>Contracts</Title>
        <ButtonClose onClick={() => handleCloseModal(true)}>
          <AiFillCloseCircle></AiFillCloseCircle>
        </ButtonClose>
      </ModalHeader>
      
      <ModalBody>
        <Text><Span>Razão Social:</Span> {isContract[0].razaosocial}</Text>
        <Text><Span>Nome Fantasia:</Span> {isContract[0].nomefantasia}</Text>
        <Text><Span>CNPJ:</Span> {isContract[0].cnpj}</Text>
        <Text><Span>Nome do Contrato:</Span> {isContract[0].nomecontrato}</Text>
        <Text><Span>Código do Contrato:</Span> {isContract[0].codigo}</Text>
        <Text><Span>Retenção Técnica:</Span> {isContract[0].retencao}</Text>
      </ModalBody>
    </div>
  )
}
