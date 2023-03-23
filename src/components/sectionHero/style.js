import styled from 'styled-components';

import bgHero from '../../assets/bg-hero.jpg';
import { Container } from '../../styles/global';

export const SectionHeroStyle = styled.section`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 73.1rem;
    background: url(${bgHero}) no-repeat top center;
    background-attachment: fixed;
    background-size: fill;
    padding-top: 9.6rem;
    display: flex;

    ${Container} {
        display: flex;
        align-items: flex-start;
    }

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30rem;
        background-image: linear-gradient(transparent, #000000);
        z-index: -1;
    }
`;

export const AreaSocial = styled.div`
    width: 7.2rem;
    height: 100%;
    border-left: 0.1rem solid rgba(255, 255, 255, 0.2);
    border-right: 0.1rem solid rgba(255, 255, 255, 0.2);

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem 0;
        border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);

        li {
            &:not(:last-child) {
                margin-bottom: 3.2rem;
            }

            a {
                display: block;
            }
        }
    }
`;

export const ContextText = styled.div`
    height: 100%;
    padding-left: 9.6rem;
    padding-right: 7.1rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex: 1;
    padding-bottom: 3.1rem;
    border-right: 0.1rem solid rgba(255, 255, 255, 0.2);

    .left {
        flex: 1;
        padding-bottom: 2.1rem;

        h3 {
            font-weight: 700;
            font-size: 1.2rem;
            line-height: 2.1rem;
            letter-spacing: 0.0095em;
            color: #FFA800;
            margin-bottom: 0.8rem;
        }

        h1 {
            font-weight: 600;
            font-size: 5.1rem;
            line-height: 7.1rem;
            margin-bottom: 2.4rem;
        }

        p {
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 2.4rem;
            color: gray;
            max-width: 49rem;
           
        }

        a {
            display: inline-block;
            padding: 1.5rem 5.2rem;
            background-color: $red900;
            border-radius: 0.5rem;
            font-weight: 600;
            line-height: 2.4rem;
            font-size: 1.6rem;
            color: $white;
            transition: all 0.3s ease;

            &:hover {
                filter: brightness(0.8);
            }
        }
    }
`;