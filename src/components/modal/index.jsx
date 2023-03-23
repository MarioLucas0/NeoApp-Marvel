import React from 'react';
import { Background, CloseButton, ModalContainer } from "./styles";
const Modal = ({ isOpen, setModalOpen, children }) => {
  console.log("teste")
if (isOpen) {
return (
<Background>
<ModalContainer>
<CloseButton onClick={setModalOpen}>x</CloseButton>
<div>{children}</div>
<button onClick={setModalOpen}>Fechar</button>
</ModalContainer>
</Background>
);
}
return null;
};

export default Modal;