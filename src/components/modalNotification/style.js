import "animate.css";
import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31rem;
  height: 12rem;
  background: linear-gradient(119.36deg, rgb(1, 1, 1) 0%, rgb(0, 0, 0) 100%);
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  z-index: 10000;
  animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 3rem;
  border-radius: 5px;
  position: relative;
  text-align: center;

  display: flex;
  justify-content: space-between;
`;
export const Text = styled.p`
  font-weight: 700;
  font-size: 2rem;
  border: none !important;
`;

export const ModalLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const LoadingBar = styled.div`
  width: 0%;
  height: 5px;
  margin-top: 10px;
  background-color: red;
  transition: width 2s ease-in-out;
  animation-fill-mode: forwards;
  animation-duration: 2s;
  animation-name: loading-bar;
  animation-timing-function: ease-in-out;

  @keyframes loading-bar {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;
