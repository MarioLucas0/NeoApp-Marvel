import "animate.css";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  margin-top: 20rem;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const DivImg = styled.div`
  width: 90%;
  max-width: 100rem;
  height: 100%;
  max-height: 80rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  @media (max-width: 1100px) {
    img {
      object-fit: contain;
    }
  }
`;
export const DivText = styled.div`
  width: 100%;
  padding: 2rem;

  h2,
  h3,
  p {
    color: white;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  span {
    color: gray;
    font-size: 2rem;
  }

  .creator {
    display: flex;
    span {
      flex-direction: column;
    }
  }
`;
