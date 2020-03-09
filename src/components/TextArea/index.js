import React from "react";
import Typing from "react-typing-animation";
import { Link } from "react-router-dom";

import { Container, Span, Sub, Button, Paragraph, Title } from "./styles";

export default function TextArea({ text, children }) {
  let home = true;

  if (text) {
    home = false;
  }
  if (!home && !children) {
    text = text + " | Under Construction!";
  }

  const span = text || "Hi I'm William, web developer.";

  return (
    <Container>
      <Typing speed={100}>
        {home ? (
          span.split("").map((c, i) => {
            if (i === 2) {
              return <br />;
            }
            if (i === 6) {
              return "  ";
            }
            if (i === 15) {
              return <br />;
            }
            if (i === 19) {
              return "  ";
            } else {
              return (
                <Span name="rubberBand" direction="normal" opacity="1">
                  {c}
                </Span>
              );
            }
          })
        ) : children ? (
          <Title>{span}</Title>
        ) : (
          span
        )}
      </Typing>
      {home && <Sub>Font End Developer / Wordpress Creator / Freelancer</Sub>}
      {home && (
        <Link to="contact">
          <Button>Contact Me</Button>
        </Link>
      )}
      {!home && <Paragraph>{children}</Paragraph>}
    </Container>
  );
}
