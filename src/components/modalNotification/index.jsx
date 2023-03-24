import React, { useEffect, useState } from 'react';
import { LoadingBar, ModalContent, ModalLoading, ModalWrapper, Text } from "./style";

export const ModalTotast = ({ message, showModal, setShowModal }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (showModal) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        setShowModal(false);
      }, 3000); 
    }
  }, [showModal, setShowModal]);

  return (
    <ModalWrapper style={{ display: visible ? 'flex' : 'none' }}>
      <ModalContent>
        <ModalLoading>
          <Text>{message}</Text>
          <LoadingBar />
        </ModalLoading>
      </ModalContent>
    </ModalWrapper>
  );
};





