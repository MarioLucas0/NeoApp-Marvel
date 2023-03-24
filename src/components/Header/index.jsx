import { useContext } from "react";
import { Link } from "react-router-dom";
import Carrinho from '../../assets/carrinho-de-compras.svg';
import Logo from '../../assets/logo.svg';
import { context } from '../../context/carrinho';
import { Container } from '../../styles/global';
import { DivCarrinho, HeaderStyle, QuantidadeItems } from './style';
export function Header() {

    const {comicsCart} = useContext(context);



    return ( 
        <HeaderStyle>
            <Container>
                <div className="logo">
                    <Link to="/">
                        <img src={ Logo } alt="Logo Marvel Studios" />
                    </Link>
                </div>
                <DivCarrinho >
                    <Link  to="/carrinho">
                        <img src={Carrinho} alt="" /> 
                    </Link>
                <QuantidadeItems item={comicsCart.length > 0 ? true : false}>
                    <span>{comicsCart.length}</span>
                </QuantidadeItems>
                </DivCarrinho>
            </Container>
        </HeaderStyle>
     
    )
}