import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carrinho from "../../assets/carrinho-de-compras.svg";
import LogoMarvel from "../../assets/logo.svg";
import Pesquisa from "../../assets/Pesquisa.svg";
import { context } from "../../context/carrinho";
import { Container } from "../../styles/global";
import { ModalTotast } from "../modalNotification";
import {
  BtnLoadMore,
  ButtonLimpar,
  DivInput,
  DivInputs, Info, Rarity,
  StyleCard,
  StyleListCharacter,
  StyleListCharacters
} from "./styles";

export function ListCharacters({ data }) {
  const { handleAddItemToCart, comicsCart } = useContext(context);
  const [comic, setComic] = useState();
  const [busca, setBusca] = useState("");
  const [limit, setLimit] = useState(10);
  const [rarity, setRarity] = useState("");

  const arrayPrice = [
    230, 312, 420, 305, 100, 32, 320, 209, 32, 500, 200, 214, 120, 450, 120,
    234, 501, 210, 700.2,
  ];

  const limpar = () => {
    if (busca !== "") {
      setBusca("");
    }
  };

  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  function generateRarity() {
    const rarityIndices = [];
    while (rarityIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * 20);
      if (!rarityIndices.includes(randomIndex)) {
        rarityIndices.push(randomIndex);
      }
    }
    const rarities = Array(20).fill("comum");
    rarityIndices.forEach((index) => {
      rarities[index] = "raro";
    });
    return rarities;
  }
  useEffect(() => {
    setRarity(generateRarity());
  }, []);

  const comicsToShow = data
    .slice(0, limit)
    .filter((comic) => comic.title.toUpperCase().includes(busca.toUpperCase()));

  return (
    <StyleListCharacter>
      <Container>
        <div className="title">
          <DivInputs>
            <DivInput>
              <input
                type="text"
                className="filtro"
                placeholder="Digite o Titulo do Quadrinho"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
              <img src={Pesquisa} alt="" />
            </DivInput>
            <ButtonLimpar onClick={limpar}>Limpar Filtro</ButtonLimpar>
          </DivInputs>
          <h2>Quadrinhos da Marvel</h2>
        </div>
        <StyleListCharacters>
          {comicsToShow.map((character, index) => {
            return (
              <StyleCard key={index}>
                <div
                  className="image"
                  onClick={() => {
                  }}
                >
                  <img
                    src={
                      character.thumbnail.path +
                      "." +
                      character.thumbnail.extension
                    }
                    width={280}
                    height={372}
                    alt="Imagem do personagem"
                  />
                </div>

                <Info>
                  <div>
                    <h3>{character.title.substring(0, 20) + "..."}</h3>
                    <span>R$ {arrayPrice[index]}</span>
                    <Rarity rarity={rarity[index]}>
                      {rarity[index] === "raro" ? "Raro" : "Comum"}
                    </Rarity>
                    <Link to={`/detalhes/comic/${character.id}`}>
                      Ver Mais..
                    </Link>
                  </div>
                  <button
                    onClick={() =>
                      handleAddItemToCart(
                        character,
                        arrayPrice[index],
                        rarity[index]
                      )
                    }
                  >
                    <img
                      className="carrinho"
                      src={Carrinho}
                      alt=""
                      onClick={handleClick}
                    />
                  </button>
                  <ModalTotast
                    message="Quadrinho Adicionado ao Carrinho com Sucesso!"
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />
                </Info>
              </StyleCard>
            );
          })}
          {limit < data.length && (
            <BtnLoadMore onClick={() => setLimit(limit + 10)}>
              Carregar Mais
            </BtnLoadMore>
          )}

          <div className="marvel">
            <img src={LogoMarvel} alt="Logo marvel studios" />
          </div>
        </StyleListCharacters>
      </Container>
    </StyleListCharacter>
  );
}
