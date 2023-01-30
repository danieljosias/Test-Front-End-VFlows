import React, { useContext } from 'react'
import { ModalHeader, Title, ModalBody, Text, ButtonClose } from './styles'
import { ContractContext } from '../../contexts/Contracts/contractContext'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function ModalContent({handleCloseModal}) {
    const { contractData } = useContext(ContractContext)

    const cnpj = localStorage.getItem('cnpj')
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
        <Text>Razão Social: {isContract[0].rezaosocial}</Text>
        <Text>Nome Fantasia: {isContract[0].nomefantasia}</Text>
        <Text>CNPJ: {isContract[0].cnpj}</Text>
        <Text>Nome do Contrato: {isContract[0].nomecontrato}</Text>
        <Text>Código do Contrato: {isContract[0].codigo}</Text>
        <Text>Retenção Técnica: {isContract[0].retencao}</Text>
      </ModalBody>
    </div>
  )
}
