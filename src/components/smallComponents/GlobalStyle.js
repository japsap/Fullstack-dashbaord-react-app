import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle
`
    *,
    *::after,
    *::before {
    box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        margin: 0;
        padding: 0;
        font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        transition: all 0.25s linear;
      }
    .btn-1 {
      border: 1px solid ${({theme}) => theme.text};
      padding: 10px;
      border-radius:5px;
      display: block;
      position: fixed;
      margin: 35px;
      top: 0%;
      right: 0%;
      border: 2px solid #D3AB9E;
      color:#D3AB9E;
      z-index: 11;
    }
    .btn-2{
      border: 1px solid ${({theme}) => theme.text};
      padding: 10px;
      border-radius:5px;
      display: none;
      position: fixed;
      background-color:#D3AB9E;
      border: 2px solid #fff;
      margin: 35px;
      top: 0%;
      right: 0%;
      z-index: 11;
    }
`