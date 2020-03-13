import React, { useState } from "react";
import Typing from "react-typing-animation";
import { Link } from "react-router-dom";

import { Container, Span, Sub, Button, Paragraph, Title } from "./styles";

export default function TextArea({ home, pre, title, subtitle, children }) {
  const [actived, setActived] = useState(false);

  return (
    <Container>
      <Typing
        cursorClassName="custom"
        cursor={<span>_</span>}
        speed={80}
        onFinishedTyping={() => setActived(true)}
      >
        {!home ? (
          <Title>{title}</Title>
        ) : pre ? (
          <React.Fragment>
            <Typing.Speed ms={80} />
            {pre.split("").map(char => {
              switch (char) {
                case "~":
                  return <br key={Math.random()} />;
                case "":
                  return " ";
                case " ":
                  return " ";
                default:
                  return (
                    <Span key={Math.random()} name="rubberBand">
                      {char}
                    </Span>
                  );
              }
            })}

            <Typing.Backspace count={32} delay={100} speed={30} />
            <Typing.Speed ms={50} />

            {title.split("").map(char => {
              switch (char) {
                case "~":
                  return <br key={Math.random()} />;
                case "":
                  return " ";
                case " ":
                  return " ";
                default:
                  return (
                    <Span key={Math.random()} name="rubberBand">
                      {char}
                    </Span>
                  );
              }
            })}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typing.Speed ms={50} />
            {title.split("").map(char => {
              switch (char) {
                case "~":
                  return <br key={Math.random()} />;
                case "":
                  return " ";
                case " ":
                  return " ";
                default:
                  return (
                    <Span key={Math.random()} name="rubberBand">
                      {char}
                    </Span>
                  );
              }
            })}
          </React.Fragment>
        )}
      </Typing>
      {home && <Sub className={actived && "active"}>{subtitle}</Sub>}
      {!home && !children && (
        <Sub className="fast" size="18px">
          EM CONSTRUÇÃO...
        </Sub>
      )}
      {home && (
        <Link to="contact">
          <Button className={actived && "active"}>Entre em Contato</Button>
        </Link>
      )}
      <Paragraph>{children}</Paragraph>
    </Container>
  );
}
