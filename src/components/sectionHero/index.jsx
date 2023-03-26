import IconInstagram from "../../assets/instagram.svg";
import IconYoutube from "../../assets/youtube.svg";
import { Container } from "../../styles/global";
import { AreaSocial, ContextText, SectionHeroStyle } from "./style.js";

const socials = [
  {
    name: "Youtube",
    url: "#",
    icon: IconYoutube,
  },
  {
    name: "Instagram",
    url: "#",
    icon: IconInstagram,
  },
];

export const SectionHero = () => {
  return (
    <SectionHeroStyle>
      <Container>
        <AreaSocial>
          <ul>
            {socials.map(({ name, url, icon }) => {
              return (
                <li key={`social-${name}`}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <img src={icon} alt={name} />
                  </a>
                </li>
              );
            })}
          </ul>
        </AreaSocial>
        <ContextText>
          <div className="left">
            <h3>COMING SON</h3>
            <h1>
              Marvel Comics - A maior coleção de heróis e vilões em quadrinhos!
            </h1>
            <p>
              Bem-vindo à loja oficial da Marvel Quadrinhos! Aqui, você
              encontrará a maior coleção de quadrinhos dos seus heróis e vilões
              favoritos. De clássicos como Homem-Aranha e X-Men até as últimas
              novidades da Marvel, temos tudo o que você precisa para mergulhar
              no universo dos super-heróis. Descubra histórias épicas de ação,
              aventura e intriga, apresentadas em uma ampla variedade de
              formatos, desde edições individuais até coleções completas. Não
              importa se você é um fã de longa data ou está apenas começando sua
              jornada na Marvel Quadrinhos, nossa loja tem tudo para saciar sua
              sede de aventura. Explore nossa coleção agora e descubra o que
              torna a Marvel Quadrinhos tão especial!
            </p>
            <a href="#" target="_blank" rel="noreferrer"></a>
          </div>
        </ContextText>
      </Container>
    </SectionHeroStyle>
  );
};
