import React from "react";
import Typing from "react-typing-animation";
import { Link, useLocation } from "react-router-dom";

import { Container, Span, Sub, Button, Paragraph, Title } from "./styles";

export default function TextArea({ title, subtitle, children }) {
  return (
    <Container>
      <Typing speed={100}>
        {useLocation().pathname === "/" ? (
          title.split("").map(char => {
            switch (char) {
              case "~":
                return <br />;
              case "":
                return " ";
              case " ":
                return " ";
              default:
                return <Span name="rubberBand">{char}</Span>;
            }
          })
        ) : (
          <Title>{title}</Title>
        )}
      </Typing>
      {useLocation().pathname === "/" && <Sub>{subtitle}</Sub>}
      {useLocation().pathname !== "/" && !children && (
        <Sub size="18px">Em Construção!</Sub>
      )}
      {useLocation().pathname === "/" && (
        <Link to="contact">
          <Button>Entre em Contato</Button>
        </Link>
      )}
      <Paragraph>{children}</Paragraph>
    </Container>
  );
}
