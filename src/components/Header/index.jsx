import Image from 'next/image';
import Link from 'next/link';
import { HeaderStyle } from './style';

import { Container } from '../../styles/global';


import LogoCodeboost from '../../assets/logo-codeboost.svg';
import Logo from '../../assets/logo.svg';

export function Header() {
    return (
       <>
        <HeaderStyle>
            <Container>
                <div className="logo">
                    <Link href="/">
                        <Image src={ Logo } alt="Logo Marvel Studios" />
                    </Link>
                </div>
                <div className="code">
                    <Image src={ LogoCodeboost } alt = "Logo do codeboost" />
                </div>
            </Container>
        </HeaderStyle>
       </> 
    )
}