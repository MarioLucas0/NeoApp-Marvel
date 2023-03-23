import styled from 'styled-components';

import bgHero from '../../assets/bg-hero.jpg';
import { Container } from '../../styles/global';

export const SectionHeroStyle = styled.section`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 731px;
    background: url(${bgHero}) no-repeat top center;
    background-attachment: fixed;
    background-size: fill;
    padding-top: 96px;
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
        height: 300px;
        background-image: linear-gradient(transparent, #000000);
        z-index: -1;
    }
`;

export const AreaSocial = styled.div`
    width: 72px;
    height: 100%;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-right: 1px solid rgba(255, 255, 255, 0.2);

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);

        li {
            &:not(:last-child) {
                margin-bottom: 32px;
            }

            a {
                display: block;
            }
        }
    }
`;

export const ContextText = styled.div`
    height: 100%;
    padding-left: 96px;
    padding-right: 71px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex: 1;
    padding-bottom: 31px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);

    .left {
        flex: 1;
        max-width: 574px;
        padding-bottom: 10.1rem;

        h3 {
            font-weight: 700;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 0.095em;
            color: #FFA800;
            margin-bottom: 8px;
        }

        h1 {
            font-weight: 600;
            font-size: 61px;
            line-height: 71px;
            margin-bottom: 24px;
            max-width: 400px;
        }

        p {
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 24px;
            color: $gray200;
            max-width: 490px;
            margin-bottom: 32px;
        }

        a {
            display: inline-block;
            padding: 1.5rem 5.2rem;
            background-color: $red900;
            border-radius: 5px;
            font-weight: 600;
            line-height: 24px;
            font-size: 1.6rem;
            color: $white;
            transition: all 0.3s ease;

            &:hover {
                filter: brightness(0.8);
            }
        }
    }
`;