import styled from "styled-components";

import bgHero from "../../assets/bg-hero.jpg";



export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: url(${bgHero}) no-repeat top center;
  background-size: cover;
`;
export const Main = styled.main`
  width: 90%;
  max-width: 126rem;
  max-height: 82rem;
  background: linear-gradient(119.36deg, #010101 0%, #000000 100%);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 3.6rem;
  padding: 3rem;
  position: relative;
  margin-bottom: 38rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  margin-top: 19rem;
`;
export const Cupom = styled.main`
display: flex;
flex-direction: column;
gap: 1rem;
  label {
    font-size: 1.5rem;
  }
  input {
    width: 20rem;
    height: 4rem;
  }
  button {
    width: 10rem;
    height: 3rem;
    background-color: rgb(100, 20, 20);
    color: white;
    font-weight: 700;
  }
`;

export const DivContainer = styled.div`
  width: 80%;
  height: 30%;
  border-radius: 15px;
  min-height: 57rem;
  overflow: auto;
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
  }
`;

export const DivContainerCard = styled.div`
  display: flex;
  width: 100%;
  margin-block: 1rem;
  border: 0.2rem solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 20px rgb(0 0 0 / 15%);
  padding: 1rem;
  border-radius: 15px;
  max-width: 80rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const DivImg = styled.div`
  width: 10rem;
  margin-right: 2rem;
  img {
    max-width: 12rem;
    height: 15rem;
  }
  @media (max-width: 700px) {
    margin-bottom: 3rem;
  }
`;

export const DivInfo = styled.div`
  border-left: 1px solid #9e9e9e;
  padding-left: 1rem;
  span {
    font-size: 1.5rem;
    font-weight: 700;
  }
  h1 {
    margin: 0.4rem 0 1rem 0;
    color: #9e9e9e;
  }
  p {
    color: #9e9e9e;
    font-size: 1.4rem;
    margin-top: 0.7rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  @media (max-width: 700px) {
    width: 100%;
    border-left: none;
  }
`;
export const TextoPrincipal = styled.h1`
  font-size: 2rem;
  padding-top: 2rem;
`;
export const TextoSecundario = styled.h2`
  padding-bottom: 4rem;
  font-size: 4rem;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
`;

export const ButtonFazerPedido = styled.button`
  width: 21rem;
  height: 3.8rem;
  background: #641414;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
`;
export const TotalPrice = styled.p`
  margin-top: 1rem;
  width: 25rem;
  height: 5rem;
  border-radius: 15px;
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  font-size: 1.5rem;
  padding: 1rem;
`;

export const ButtonLimpar = styled.button`
  width: 21rem;
  height: 3.8rem;
  background: #9e9e9e;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
`;

export const DivButtons = styled.div`
  display: flex;
  padding-bottom: 1rem;
  justify-content: flex-end;
  gap: 3rem;
 
`;
export const DivIconFechar = styled.div`
  img {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
  }
`;

export const DivInfos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    height: 2.2rem;
    width: 2.2rem;
    border-radius: 1rem;
    font-size: 2rem;
    font-weight: 700;
    background-color: #407bff;
    color: white;
    margin-left: 1rem;
  }
  @media (max-width: 900px) {
    border-right: 0.1rem solid rgba(255, 255, 255, 0.2);
    padding: 1rem;
  }
`;
