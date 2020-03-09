import React from "react";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";

import { Page, Container } from "./styles";

export default function About() {
  document.title = "About Me | William's Portfólio";
  return (
    <Page>
      <Container>
        <LogoArea />
        <TagsArea position="56%" />
        <TextArea text="About Me" />
      </Container>
    </Page>
  );
}
