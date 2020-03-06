import React from "react";

import { Container } from "./styles";

export default function TextArea({ text }) {
  return (
    // <Container>{text || "Hi I'am William, web developer."}</Container>
    <Container>
      {text
        ? " | Under Construction | " + text
        : "Hi I'am William, web developer."}
    </Container>
  );
}
