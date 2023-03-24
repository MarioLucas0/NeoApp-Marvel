import 'animate.css';
import styled from 'styled-components';
export const Container = styled.div` 
position: fixed; 
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7); 
  z-index: 1000;`

export const ModalContainer = styled.div` 
position: fixed; 
top: 50%; left: 50%; 
transform: translate(-50%, -50%); 
width: 80%;
max-width: 126rem;
height: 70%;
background: linear-gradient(119.36deg, #010101 0%, #000000 100%);
border-radius: 10px; color: black;
border: 0.1rem solid rgba(255, 255, 255, 0.2);;
animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
animation-duration: 1s;
`
export const CloseButton = styled.button` 
cursor: pointer;
position: absolute;
width: 4rem;
height: 4rem;
top: -6rem;
right: 0rem;
background: linear-gradient(119.36deg, #010101 0%, #000000 100%);
border: 0.1rem solid rgba(255, 255, 255, 0.2);
 span {
  color: white;
  font-size: 2rem;
  :hover {
    color: red;
  }
 }
`
export const Content = styled.div` 
  display: flex;
  height: 100%;
  overflow: hidden;
`
export const DivImg = styled.div`
  width: 50%;
  height: 100% ;
  img {
  width: 100%;
  height: 100% ;
  object-fit: fill;
  }

`
export const DivText = styled.div` 
 width: 50%;
 padding: 2rem;

  h2,h3,p {
    color: white;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  span {
    color: gray;;
    font-size: 2rem;
  }

  .creator {
    display: flex;
    span {
      flex-direction: column;
    }
    
  }
`