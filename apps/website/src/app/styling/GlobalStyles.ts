import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;

    p{
      line-height: 2;
      font-weight: 300;
      a{
        color: ${({ theme }) => theme.primaryColor} !important;
      }
    }
  }
  `;
