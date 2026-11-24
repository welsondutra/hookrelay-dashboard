import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html { color-scheme: dark; }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.ground};
    color: ${({ theme }) => theme.colors.text};
    font-family: var(--font-text), system-ui, sans-serif;
    font-size: ${({ theme }) => theme.font.body};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, p { margin: 0; }

  a { color: inherit; text-decoration: none; }

  button, input, select, textarea { font: inherit; color: inherit; }

  :focus-visible { outline: 1px solid ${({ theme }) => theme.colors.accent}; outline-offset: 2px; }

  ::selection { background: ${({ theme }) => theme.colors.accent}; color: #000; }
`;
