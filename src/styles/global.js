import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  min-height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
}

html {
  color: ${props => props.theme.foreground};
  font-size: 1em;
  line-height: 1.4em;
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

@font-face {
  font-family: 'Coolvetica';
  src:url('fonts/Coolvetica.ttf.woff') format('woff'),
      url('fonts/Coolvetica.ttf.svg#Coolvetica') format('svg'),
      url('fonts/Coolvetica.ttf.eot'),
      url('fonts/Coolvetica.ttf.eot?#iefix') format('embedded-opentype');
  font-weight: normal;
  font-style: normal;
}

@media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
  html {
  max-width: 100vh;
  min-height: 100vw;
  max-height: 100vw;
  }
}
`;

export const Page = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    min-height: 100vw;
    min-width: 100vh;
  }
`;

export const Container = styled.div`
  position: absolute;
  will-change: contents;
  height: 94vh;
  width: 100%;
  margin: 0 auto;
  top: 5vh;
  bottom: 5vh;

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    min-height: 94vw;
    min-width: 100vh;
    top: 5vw;
    bottom: 5vw;
  }
`;
