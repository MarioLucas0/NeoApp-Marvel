import { useContext, useEffect, useState } from "react";
import { ModalTotast } from "../../components/modalNotification";
import { context } from "../../context/carrinho";
import {
  ButtonFazerPedido,
  ButtonLimpar, Cupom, DivButtons,
  DivContainer,
  DivContainerCard,
  DivIconFechar,
  DivImg,
  DivInfo,
  DivInfos,
  Main,
  Section,
  TextoPrincipal,
  TotalPrice
} from "./style";

export const CarrinhoCompras = () => {
  const [showModal, setShowModal] = useState(false);
  const [codigoCupom, setCodigoCupom] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [mensagemModal,setMensagemModal] = useState("");

  const limpar = () => {
    setShowModal(true);
    setMensagemModal("Carrinho Limpo")
    clearCart();
  };

  const { comicsCart, removerItem, clearCart, aumentarItem } =
    useContext(context);

  const comprar = () => {
    setShowModal(true);
    setMensagemModal("Pedido Realizado!")
    clearCart();
  };

  const handleInputChange = (event) => {
    setCodigoCupom(event.target.value);
  };

  const [subTotaisComDesconto, setSubTotaisComDesconto] = useState([]);

  let descontoTotal = 0;

  let cuponsAplicados = {
    CUPOM10: false,
    RARO50: false,
  };
  let descontoTotalPorTipo = {
    CUPOM10: 0,
    RARO50: 0,
  };

  const aplicarCupom = () => {
    let novoSubTotaisComDesconto = [];

    comicsCart.forEach((comic) => {
      let subTotal = comic.price * comic.quantidade;
      let desconto = 0;

      if (
        codigoCupom === "CUPOM10" &&
        comic.raridade === "comum" &&
        !cuponsAplicados["CUPOM10"]
      ) {
        desconto = subTotal * 0.1;
        cuponsAplicados["CUPOM10"] = true;
        descontoTotalPorTipo["CUPOM10"] += desconto;
      }
      if (
        codigoCupom === "RARO50" &&
        comic.raridade === "raro" &&
        !cuponsAplicados["RARO50"]
      ) {
        desconto = subTotal * 0.5;
        cuponsAplicados["RARO50"] = true;
        descontoTotalPorTipo["RARO50"] += desconto;
      }

      subTotal -= desconto;
      novoSubTotaisComDesconto.push(subTotal);
    });

    setSubTotaisComDesconto(novoSubTotaisComDesconto);
    calcularTotalPrice();
    setCodigoCupom("");
  };

  const calcularTotalPrice = () => {
    let total = 0;

    subTotaisComDesconto.forEach((subTotal) => {
      total += subTotal;
    });

    descontoTotal =
      descontoTotalPorTipo["CUPOM10"] + descontoTotalPorTipo["RARO50"];
    total -= descontoTotal;
    setTotalPrice(total);
  };

  function handleAplicarCupomClick() {
    if (codigoCupom !== "RARO50" || codigoCupom !== "CUPOM10") {
      aplicarCupom();
      calcularTotalPrice();
    }
  }

  useEffect(() => {
    console.log();
    handleAplicarCupomClick();
    let total = 0;
    comicsCart.forEach((comic) => {
      total += comic.price * comic.quantidade;
    });
    setTotalPrice(total);
  }, [comicsCart]);
  return (
    <Section>
      <TextoPrincipal>CARRINHO DE COMPRAS</TextoPrincipal>
      <Main>
        <DivContainer>
          {comicsCart?.map((comic, index) => {
            return (
              <DivContainerCard key={index}>
                <DivImg>
                  <img src={comic.img} />
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
                  <DivIconFechar>
                    {/* <img src={iconFechar} onClick={() => removalItem(product?.id)}/> */}
                  </DivIconFechar>
                </DivInfos>
              </DivContainerCard>
            );
          })}
        </DivContainer>
        <DivButtons>
          <ButtonFazerPedido onClick={comprar}>
            Realizar Pedido
          </ButtonFazerPedido>
          <ButtonLimpar
            onClick={limpar}
          >
            Limpar Carrinho
          </ButtonLimpar>
        </DivButtons>
        <Cupom>
            <label htmlFor="cupom">Cupom de desconto:</label>
            <input
              type="text"
              id="cupom"
              value={codigoCupom}
              onChange={handleInputChange}
            />
            <button onClick={(e) => handleAplicarCupomClick()}>Aplicar</button>
          </Cupom>


          <ModalTotast
            message={mensagemModal}
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <TotalPrice>Valor Total: R$ {totalPrice.toFixed(2)} </TotalPrice>
      </Main>
    </Section>
  );
};
