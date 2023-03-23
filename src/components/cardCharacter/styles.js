import styled from 'styled-components';

export const StyleListCharacter = styled.div`
    padding-top: 5.6rem;
    padding-bottom: 5.2rem;
    .title {
        display: flex;
        align-items: center;
        margin-bottom: 5.6rem;
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
            max-width: 21.6rem;
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
            object-fit: cover;
            transition: all 0.3s ease;
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