import React from "react";

import { Container, Image } from "./styles";
import logo from "../../assets/logo.svg";

export default function LogoArea() {
  return (
    <Container>
      <Image src={logo} alt="Logo" />
    </Container>
  );
}
