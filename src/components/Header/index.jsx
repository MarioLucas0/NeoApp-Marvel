import { Link } from "react-router-dom";
import { Container } from '../../styles/global';
import { HeaderStyle } from './style';



import Logo from '../../assets/logo.svg';

export function Header() {
    return (
    
        <HeaderStyle>
            <Container>
                <div className="logo">
                    <Link href="/">
                        <img src={ Logo } alt="Logo Marvel Studios" />
                    </Link>
                </div>
            </Container>
        </HeaderStyle>
     
    )
}