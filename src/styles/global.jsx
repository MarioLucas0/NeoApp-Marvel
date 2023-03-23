import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
 * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        list-style: none;
        text-decoration: none;
        font-family: Poppins, sans-serif;
    }

    html {
         font-size: 62.5%;
    }
    body {
        -webkit-font-smoothing: antialiased;
        background: linear-gradient(119.36deg, #010101 0%, #000000 100%);
        color: white;
    }
    img {
        max-width: 100%;
        display: block;
    }
    button {
        cursor: pointer,
    }
   
  
`
export const Container = styled.div`

div {
    width: 100%;
    max-width: 1216;
    margin: 0 auto;
    }
  
`


export default GlobalStyle;