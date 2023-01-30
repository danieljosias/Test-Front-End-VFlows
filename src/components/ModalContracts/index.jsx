import Modal from 'react-modal';
import ModalContent from '../ModalContent'
import { customStyles } from '../../styles/customStyles'

export const ModalContracts = ({modal, handleCloseModal}) => {
  return (
    <>
    <Modal
        isOpen={modal}
        style={customStyles}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
    >
        <ModalContent handleCloseModal={handleCloseModal}/>
    </Modal>
    </>
  );
};
