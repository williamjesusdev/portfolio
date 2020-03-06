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
  height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}

html {
  color: ${props => props.theme.foreground};
  font-size: 1em;
  line-height: 1.4;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
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
  vertical-align: bottom
}

a {
  color: ${props => props.theme.accent};
  text-decoration: none
}

a:hover {
  color: ${props => props.theme.accent}
}

a:focus, a:hover, a:active {
  outline: 0
}

input:focus {
  outline: 0;
  border: 1px solid ${props => props.theme.second}
}

::selection {
  background: ${props => props.theme.second};
  color: #fff;
  text-shadow: none
}
`;
