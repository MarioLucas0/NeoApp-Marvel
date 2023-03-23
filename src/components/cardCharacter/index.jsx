
import { useState } from 'react';
import Carrinho from '../../assets/carrinho-de-compras.svg';
import LogoMarvel from '../../assets/logo.svg';
import { Container } from "../../styles/global";
import Modal from '../modal';
import { StyleCard, StyleListCharacter, StyleListCharacters } from "./styles";


export function ListCharacters({ data }) {

    
    const [openModal, setOpenModal] = useState(false)
  

    const arrayPrice = ["230.90", "312.20", "420.20", "305.00", "100.20", "32.90", "320.20", "209.00", "32.20", "500.20", "200.31", "214.50", "120.00", "450.00", "120.21", "234.00", "501.10", "210.19", "700.20"]



    return (
        <StyleListCharacter>
            <Container>
                <div className="title">
                    <span>What if</span>
                    <h2>Personagens Marvel</h2>
                </div>
                <StyleListCharacters>
                        {
                            data.map((character,index) => {
                                return (
                                <StyleCard key={index}>
                                    
                                        <div className="image" onClick={() => setOpenModal(true)}>
                                            <img src={character.thumbnail.path+'.'+character.thumbnail.extension} width={280} height={372} alt="Imagem do personagem" />
                                        </div>
                                        <div className="info">
                                            <div>
                                                <h3>{character.title.substring(0,20) + '...'}</h3>
                                                <span>R$ {arrayPrice[index]}</span>
                                            </div>
                                            <button>
                                                <img className="carrinho" src={Carrinho} alt="" />  
                                            </button>
                                        </div>
                                </StyleCard>
                                )
                            })
                        }
                    <div className="marvel">
                        <img src={ LogoMarvel } alt="Logo marvel studios" />
                    </div>
                </StyleListCharacters>
                
                <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                    Conteúdo do modal
                </Modal>
            </Container>
        </StyleListCharacter>
    )
}