import 'animate.css';
import styled from 'styled-components';

export const StyleListCharacter = styled.div`
    padding-top: 5.6rem;
    padding-bottom: 5.2rem;
    .title {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 10.6rem;
        margin-top: 10rem;
        display: flex;
        align-items: center;
                span {
            font-weight: 400;
            font-size: 1.8rem;
            line-height: 2.7rem;
            color: #FFFFFF;
            opacity: 0.4;
            margin-right: 1.13rem;
        }
        h2 {
            font-weight: 600;
            font-size: 2.5rem;
            line-height: 3.5rem;
            color: #FFFFFF;
            max-width: 30.6rem;
            position: relative;
            padding-left: 1.6rem;
            &:before {
                content: "";
                background-color: $red800;
                width: 0.2rem;
                height: 5.9rem;
                position: absolute;
                top: 0.55rem;
                left: 0;
            }
        }
    }
`;

export const StyleListCharacters = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4.4rem 0.33rem;
   
    .marvel {
        width: 28rem;
        height: 36.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const StyleCard = styled.div`
    width: 100%;
    max-width: 28rem;
    animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 4s;
    &:hover {
        .image img {
            transform: scale(1.05);
        }
        .info h3 {
            color: red;
        }
    }

    a {
        display: block;
    }

    .image {
        width: 100%;
        height: 37rem;
        margin-bottom: 0.16rem;
        border-radius: 0.5rem;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            transition: all 0.3s ease;
            object-fit: fill;
            cursor: pointer;
        }
    }

    .info {
        display: flex;
        justify-content: space-between;
        margin-top: 1.2rem;
        h3 {
            font-weight: 600;
            font-size: 1.8rem;
            line-height: 2.7rem;
            color: #FFFFFF;
            margin-bottom: 0.4rem;
            transition: all 0.3s ease;
        }
        span {
            display: block;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2.1rem;
            color: white;
            opacity: 0.4;
        }
        button {
            background: none;
            .carrinho {
            width: 3rem;
            }
        }
    
    }
`;

export const DivInputs = styled.div`
  width: 65rem;
  height: 5.5rem;
  background: linear-gradient(119.36deg, rgb(1, 1, 1) 0%, rgb(0, 0, 0) 100%);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  margin-right: 4rem;
  
  
  @media (max-width: 1030px) {
    
    width: 80%;
  
}
    
`


export const ButtonLimpar = styled.button`
    width: 20rem;
    height: 3.5rem;
    border-radius: 10px;
    margin-left: 1.7rem;
    background: linear-gradient(119.36deg, rgb(1, 1, 1) 0%, rgb(0, 0, 0) 100%);
    border: 0.1rem solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
    margin-block: 1rem;
    font-weight: bold;
    color: white;
    :hover{
      color: red;
    }  
  
    @media (max-width: 1030px) {
      display: none;
  }
    
`
export const BtnLoadMore = styled.button`
  margin-top: 17rem;
  width: 21rem;
  height: 3.8rem;
  background: #641414;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
`


export const DivInput = styled.div`
  width: 39rem;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  margin-left: 1.2rem;
  
  input[type="text"]
   {
    background: linear-gradient(119.36deg, rgb(1, 1, 1) 0%, rgb(0, 0, 0) 100%);
    width: 29rem;
    height: 2.8rem;
    border: none;
    outline: 0;
    color: white;
    
  }
  @media (max-width: 1030px) {
    
   
      width: 80%;
  
  
}
    
`
