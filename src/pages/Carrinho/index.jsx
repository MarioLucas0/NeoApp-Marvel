import { useContext, useState } from "react";
import { ModalTotast } from "../../components/modalNotification";
import { context } from "../../context/carrinho";
import { ButtonFazerPedido, ButtonLimpar, DivButtons, DivContainer, DivContainerCard, DivIconFechar, DivImg, DivInfo, DivInfos, Main, Section, TextoPrincipal } from "./style";
export const CarrinhoCompras = () => {
  const [showModal, setShowModal] = useState(false);


  const handleClick = () => {
      setShowModal(true);
  };


  const {
    comicsCart, 
    setComicsCart,
    removerItem,
    removalItem,
    clearCart,
    aumentarItem
  } = useContext(context);






  let totalPrice = 0 

  const comprar = async () =>{
     alert("Tudo Ok")
 }





  return (
    <Section>
        <TextoPrincipal>CARRINHO DE COMPRAS</TextoPrincipal>
      <Main> 
        <DivContainer>
          {console.log(comicsCart)}
          {comicsCart?.map((comic,index) => {
            
            const subTotal = comic.price * comic.quantidade
            totalPrice += subTotal

            
            return (
          
            <DivContainerCard key={index}>
              <DivImg>   
                <img src={comic.img}  />
              </DivImg>
              <DivInfos>
                <DivInfo>
                  <span>Title</span>
                  <h1>{comic.title}</h1>
                  <span>Valor do Comic</span>
                  <p>R$ {comic.price}</p>
                  <span>SUB TOTAL</span>
                  <p>R$ {subTotal.toFixed(2)}</p>
                  <span>QUANTIDADE: {comic.quantidade}</span> 
                 
              
                   <button onClick={() => aumentarItem(comic)}>+</button>
                  <button onClick={() => removerItem(comic.id)}>-</button> 
                </DivInfo> 
                <DivIconFechar>{/* <img src={iconFechar} onClick={() => removalItem(product?.id)}/> */}</DivIconFechar>  
              </DivInfos>
            </DivContainerCard>   
          )})} 
        </DivContainer>
       <DivButtons>
        <ButtonFazerPedido onClick={comprar}>Realizar Pedido</ButtonFazerPedido>
        <ButtonLimpar onClick={() => {clearCart()
        handleClick()
        }} >Limpar Carrinho</ButtonLimpar>
        
        <ModalTotast  message="Carrinho Limpo" showModal={showModal} setShowModal={setShowModal}  />
        <p>Valor  Total:   R$ {totalPrice.toFixed(2)} </p>
       
       </DivButtons>
      </Main>
    </Section>
  )
};