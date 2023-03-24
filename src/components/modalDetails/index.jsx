import React from 'react';
import { CloseButton, Container, Content, DivImg, DivText, ModalContainer } from "./styles";
const Modal = ({isOpen, setModalOpen, data }) => {
    if (isOpen) {
    return (
        <Container>
          <ModalContainer>
          <CloseButton onClick={setModalOpen}><span>X</span></CloseButton> 
            <Content>
              <DivImg>
                <img src={data.thumbnail.path+'.'+data.thumbnail.extension} alt="" />
              </DivImg>
              <DivText>
                <h2>Titulo: <span>{data.title}</span></h2>
                <span>{data.prices.price}</span>
                <div className="creator">
                    <h3>
                      {data.creators.items.length !== 0 && (
                        <>
                          {data.creators.items.length > 1 ? "Criadores: " : "Criador: "}
                          {data.creators.items.map((creator, index) => (
                            <span key={index}>{creator.name}{index !== data.creators.items.length - 1 ? ', ' : '.'}</span>
                          ))}
                        </>
                      )}
                      {data.creators.items.length === 0 &&  <h3>Criador: <span>Sem Nome</span></h3>}
                    </h3>
                  </div>
                <p>Descriçao: <span>{data.description == "" ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam quod qui voluptas repellendus consectetur quos mollitia illum aliquam ea, deserunt repellat saepe doloribus perspiciatis minima voluptatibus velit id nisi." : data.description }</span></p>
              </DivText>
          </Content>
          </ModalContainer>
        </Container>
    );
    }
};

export default Modal;