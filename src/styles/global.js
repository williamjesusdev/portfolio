import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  max-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
}

html {
  color: ${props => props.theme.foreground};
  font-size: 1em;
  line-height: 1.4;
}

body {
  background: ${props => props.theme.background};
  -webkit-font-smoothing: antialiased;
}

body,
input,
button {
  font-family: Roboto, sans-serif;
}

img {
  max-width: 100%;
}

a {
  color: ${props => props.theme.accent};
  text-decoration: none
}

input:focus {
  border: 1px solid ${props => props.theme.second}
}

::selection {
  background: ${props => props.theme.second};
  color: #fff;
}

@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
  html {
  max-width: 100vh;
  min-height: 100vw;
  max-height: 100vw;
  }
}
`;
