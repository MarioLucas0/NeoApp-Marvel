import IconInstagram from '../../assets/instagram.svg';
import IconYoutube from '../../assets/youtube.svg';
import { Container } from '../../styles/global';
import { AreaSocial, ContextText, SectionHeroStyle } from './style.js';

const socials = [
  {
      name: "Youtube",
      url: "#",
      icon: IconYoutube
  }, 
  {
      name: "Instagram",
      url: "#",
      icon: IconInstagram
  }
]

export const SectionHero = () =>{
  return (
    <SectionHeroStyle>
        <Container>
            <AreaSocial>
                <ul>
                   {
                    socials.map(({name, url, icon}) => {
                        return (
                            <li key={`social-${name}`}>
                                <a href={url} target="_blank" rel="noreferrer">
                                    <img src={icon} alt={name} />
                                </a>
                            </li>
                        )
                    })
                   }
                </ul> 
            </AreaSocial>
            <ContextText>
                 <div className="left">
                    <h3>COMING SON</h3>
                    <h1>Marvel's WHAT IF… ?</h1>
                    <p>Disponível no Disney+, What If… ? é uma série de animação que leva o público para um terreno desconhecido ao contar, de forma alternativa, momentos cruciais do Universo Cinematográfico Marvel, imaginando o que teria acontecido aos super-heróis se a história fosse totalmente diferente e se passasse em outra realidade.</p>
                    <a href="#" target="_blank" rel="noreferrer">
                      
                    </a>
                </div> 
            </ContextText>
        </Container>
    </SectionHeroStyle>
  );
}