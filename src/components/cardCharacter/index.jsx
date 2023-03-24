
import { useContext, useState } from 'react';
import Carrinho from '../../assets/carrinho-de-compras.svg';
import LogoMarvel from '../../assets/logo.svg';
import Pesquisa from '../../assets/Pesquisa.svg';
import { context } from '../../context/carrinho';
import { Container } from "../../styles/global";
import Modal from '../modalDetails';
import { ModalTotast } from '../modalNotification';
import { BtnLoadMore, ButtonLimpar, DivInput, DivInputs, StyleCard, StyleListCharacter, StyleListCharacters } from "./styles";

export function ListCharacters({ data }) {

    const {handleAddItemToCart,comicsCart} = useContext(context)
    const [openModal, setOpenModal] = useState(false)
    const [comic, setComic] = useState()
    const [busca, setBusca] = useState("");
    const [limit, setLimit] = useState(10);

    
    const arrayPrice = ["230.90", "312.20", "420.20", "305.00", "100.20", "32.90", "320.20", "209.00", "32.20", "500.20", "200.31", "214.50", "120.00", "450.00", "120.21", "234.00", "501.10", "210.19", "700.20"]

    const limpar = () => {
        if(busca !== "") {
        setBusca("")
        
        }
    }

    const [showModal, setShowModal] = useState(false);
        const handleClick = () => {
            setShowModal(true);
        };


    

    const comicsToShow = data.slice(0, limit).filter((comic) => comic.title.toUpperCase().includes(busca.toUpperCase()));

   /* const comicsFiltrados = data?.filter((comic) => comic.title.toUpperCase().includes(busca.toUpperCase()))    */

 /*   const comicsFiltrados = data?.; */

    return (
        <StyleListCharacter>
            <Container>
                <div className="title">
                    <DivInputs>
                        <DivInput>
                        <input type="text" className="filtro" placeholder="Digite o Titulo do Quadrinho" value={busca}  onChange={(e) => setBusca(e.target.value)}/>
                        <img src={Pesquisa} alt="" />
                        </DivInput>
                        <ButtonLimpar onClick={limpar}>Limpar Filtro</ButtonLimpar> 
                    </DivInputs>
                    <h2>Quadrinhos da Marvel</h2>
                </div>
                <StyleListCharacters>
                        {
                            comicsToShow.map((character,index) => {
                                return (
                                <StyleCard key={index}>
                                        <div className="image" onClick={() => {
                                            setOpenModal(true)
                                            setComic(character)
                                            console.log(character)
                                            }}>
                                            <img src={character.thumbnail.path+'.'+character.thumbnail.extension} width={280} height={372} alt="Imagem do personagem" />
                                        </div>
                                        
                                        <div className="info">
                                            <div>
                                                <h3>{character.title.substring(0,20) + '...'}</h3>
                                                <span>R$ {arrayPrice[index]}</span>
                                            </div>
                                            <button onClick={() => handleAddItemToCart(character,arrayPrice[index])}>
                                                <img className="carrinho" src={Carrinho} alt="" onClick={handleClick}/>  
                                                
                                            </button>
                                            <ModalTotast  message="Quadrinho Adicionado ao Carrinho com Sucesso!" showModal={showModal} setShowModal={setShowModal}  />
                                        </div>
                                </StyleCard>
                                )
                            })
                        }
                        {limit < data.length && (
                        <BtnLoadMore onClick={() => setLimit(limit + 10)}>Carregar Mais</BtnLoadMore>
                        )}
     
                    <div className="marvel">
                        <img src={ LogoMarvel } alt="Logo marvel studios" />
                    </div>
            </StyleListCharacters>
                
                <Modal isOpen={openModal} data={comic} setModalOpen={() => setOpenModal(!openModal)}>
                    Conteúdo do modal
                </Modal>
            </Container>
        </StyleListCharacter>
    )
}