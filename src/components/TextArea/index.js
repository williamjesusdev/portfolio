import React from "react";
import Typing from "react-typing-animation";

import { Container, Span, Sub } from "./styles";

export default function TextArea({ text }) {
  let home = true;

  if (text) {
    home = false;
  }
  const span = text
    ? "Under Construction | " + text
    : "Hi I'am William, web developer.";

  return (
    <Container>
      <Typing speed={100}>
        {home
          ? span.split("").map((c, i) => {
              if (i === 2) {
                return <br />;
              }
              if (i === 7) {
                return "  ";
              }
              if (i === 16) {
                return <br />;
              }
              if (i === 20) {
                return "  ";
              } else {
                return (
                  <Span name="rubberBand" direction="normal" opacity="1">
                    {c}
                  </Span>
                );
              }
            })
          : span}
      </Typing>
      <Sub>Font End Developer / Wordpress Creator / Freelancer</Sub>
    </Container>
  );
}
