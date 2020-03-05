import { createGlobalStyle } from "styled-components";
import { background, text } from "./root";

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
  height: 100%;
}

html {
    color: ${text};
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
  background: ${background};
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
    color: #444;
    text-decoration: none
}

a:hover {
    color: #444
}

a:focus {
    outline: 0
}

a:hover,a:active {
    outline: 0
}

input:focus {
    outline: 0;
    border: 1px solid #04a4cc
}

.wrapper {
    max-width: 1280px;
    width: 95%;
    margin: 0 auto;
    position: relative
}

::selection {
    background: #04a4cc;
    color: #fff;
    text-shadow: none
}

::-webkit-selection {
    background: #04a4cc;
    color: #fff;
    text-shadow: none
}

::-moz-selection {
    background: #04a4cc;
    color: #fff;
    text-shadow: none
}
`;
