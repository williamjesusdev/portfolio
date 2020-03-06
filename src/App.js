import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

import Sidebar from "./components/Sidebar";
import Routes from "./routes";

export default function App() {
  const theme = {
    primary: "#FF0035",
    second: "#7000F2",
    accent: "#4d4d4e",
    background: "#1d1d1d",
    foreground: "#8B939C"
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Sidebar />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}
