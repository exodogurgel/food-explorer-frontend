import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;

    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter(0.2s);
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  legend, button, a {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
`