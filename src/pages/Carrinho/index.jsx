import { useContext, useState } from "react";
import { ModalTotast } from "../../components/modalNotification";
import { context } from "../../context/carrinho";
import { ButtonFazerPedido, ButtonLimpar, DivButtons, DivContainer, DivContainerCard, DivIconFechar, DivImg, DivInfo, DivInfos, Main, Section, TextoPrincipal } from "./style";



export const CarrinhoCompras = () => {
  const [showModal, setShowModal] = useState(false);
  const [codigoCupom, setCodigoCupom] = useState(''); // código do cupom de desconto digitado pelo usuário
  const [totalPrice, setTotalPrice] = useState(0); 

  
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


  const comprar = async () =>{
     alert("Tudo Ok")
 }


  const handleInputChange = (event) => {
  setCodigoCupom(event.target.value);
 };

 const [subTotaisComDesconto, setSubTotaisComDesconto] = useState([]);

 let descontoTotal = 0;
 let cuponsAplicados = {};
 
 const aplicarCupom = () => {
   let novoSubTotaisComDesconto = [];
 
   comicsCart.forEach((comic) => {
     let subTotal = comic.price * comic.quantidade;
     let desconto = 0;
 
     if (codigoCupom === "CUPOM10" && comic.raridade === "comum" && !cuponsAplicados["CUPOM10"]) {
      desconto = subTotal * 0.1;
      cuponsAplicados["CUPOM10"] = desconto;
    } else if (codigoCupom === "RARO50" && comic.raridade === "raro" && !cuponsAplicados["RARO50"]) {
      desconto = Math.min(subTotal * 0.5, comic.price * comic.quantidade);
      cuponsAplicados["RARO50"] = desconto;
    }
 
     subTotal -= desconto;
     novoSubTotaisComDesconto.push(subTotal);
     descontoTotal += desconto;
   });
 
   setSubTotaisComDesconto(novoSubTotaisComDesconto);
   calcularTotalPrice();
 };
 
 const calcularTotalPrice = () => {
   let total = 0;
 
   subTotaisComDesconto.forEach((subTotal) => {
     total += subTotal;
   });
 
   total -= descontoTotal;
   setTotalPrice(total);
 };


function handleAplicarCupomClick () {
  aplicarCupom();
  calcularTotalPrice();
};

  return (
    <Section>
        <TextoPrincipal>CARRINHO DE COMPRAS</TextoPrincipal>
      <Main> 
        <DivContainer>
    
        {comicsCart?.map((comic,index) => {
            
            
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
                  <p>Subtotal: R$ {comic.price * comic.quantidade}</p>
                  <span>QUANTIDADE: {comic.quantidade}</span>
                  <p></p>
                  <span>RARIDADE: {comic.raridade}</span> 
                
              
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

<div>
        <label htmlFor="cupom">Cupom de desconto:</label>
        <input
          type="text"
          id="cupom"
          value={codigoCupom}
          onChange={handleInputChange}
        />
        <button onClick={() =>handleAplicarCupomClick()}>Aplicar</button>
        
      </div>
        
     {/*    <label htmlFor="cupom">Cupom de desconto:</label>
<CupomInput type="text" id="cupom" value={codigoCupom} onChange={handleInputChange} />
<button onClick={() => setCodigoCupom(codigoCupom)}>Aplicar</button> */}
      
        <ModalTotast  message="Carrinho Limpo" showModal={showModal} setShowModal={setShowModal}  />
        <p>Valor  Total:   R$ {totalPrice.toFixed(2)} </p>
       
       </DivButtons>
      </Main>
    </Section>
  )
};