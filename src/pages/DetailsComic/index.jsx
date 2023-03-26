import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "../../styles/global";
import { Content, DivImg, DivText } from "./styles";

export const DetailsComic = () => {
  const { id } = useParams();

  const [comic, setComic] = useState([]);

  useEffect(() => {
    api.get(`/v1/public/comics/${id}`).then((response) => {
      setComic(response.data.data.results[0]);
      console.log(response.data.data.results[0].thumbnail);
    });
  }, []);

  return (
    <Container>
      <Content>
        <DivImg>
          <img
            src={comic.thumbnail?.path + "." + comic.thumbnail?.extension}
            alt=""
          />
        </DivImg>
        <DivText>
          <h2>
            Titulo: <span>{comic.title}</span>
          </h2>
          <div className="creator">
            <h3>
              {comic?.creators?.items.length !== 0 && (
                <>
                  {comic?.creators?.items.length > 1
                    ? "Criadores: "
                    : "Criador: "}
                  {comic?.creators?.items.map((creator, index) => (
                    <span key={index}>
                      {creator.name}
                      {index !== comic.creators?.items.length - 1 ? ", " : "."}
                    </span>
                  ))}
                </>
              )}
              {comic.creators?.items.length === 0 && (
                <h3>
                  Criador: <span>Sem Nome</span>
                </h3>
              )}
            </h3>
          </div>
          <p>
            Descriçao:{" "}
            <span>
              {comic?.description == ""
                ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam quod qui voluptas repellendus consectetur quos mollitia illum aliquam ea, deserunt repellat saepe doloribus perspiciatis minima voluptatibus velit id nisi."
                : comic.description}
            </span>
          </p>
        </DivText>
      </Content>
    </Container>
  );
};
