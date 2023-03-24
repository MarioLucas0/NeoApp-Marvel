import styled from 'styled-components';
import { Container } from '../../styles/global';

export const HeaderStyle = styled.header`

position: absolute;
top: 0;
width: 100%;
height: 96px;
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
display: flex;
align-items: center;
z-index: 2023;

   ${Container} {
        height: 100%;
        border-left: 1px solid rgba(255, 255, 255, 0.2);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

     .logo {
        position: relative;
        padding-left: 2.3rem;
        &:before {
            content: "";
            background-color: $red800;
            box-shadow: 0px 2px 4px rgba(255, 4, 13, 0.16);
            position: absolute;
            bottom: -27;
            left: 23;
            width: 104;
            height: 1;
        }
    }   

`
export const QuantidadeItems  = styled.div`

        width: 2rem;
            height: 2rem;
            background-color: red;
            border-radius: 50%;
            top: -0.8rem;
            position: absolute;
            right: 1rem;
            text-align: center;
            display: ${props => props.item ? "block" :  "none" };
            span {
                font-size: 1.5rem;
                font-weight: 700;
                color: white;
        }
`
export const DivCarrinho   = styled.div`

    background: none;
        margin-right: 1rem;
        width: 5rem;
        position: relative;
        
        img {
        width: 3rem;
    }
`