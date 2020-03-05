import React from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./styles/global";

import Sidebar from "./components/Sidebar";
import Routes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Sidebar />
      <Routes />
    </BrowserRouter>
  );
}
