import React from "react";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";

import { Page, Container } from "./styles";

export default function Contact() {
  document.title = "Contact Me |  William's Portfólio";

  return (
    <Page>
      <Container>
        <TagsArea />
        <TextArea text="Contact Me" />
        <LogoArea />
      </Container>
    </Page>
  );
}
