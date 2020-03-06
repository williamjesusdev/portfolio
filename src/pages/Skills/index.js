import React from "react";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";

import { Page, Container } from "./styles";

export default function Skills() {
  document.title = "My Skills | William's Portfólio";

  return (
    <Page>
      <Container>
        <TagsArea />
        <TextArea text="My Skills" />
        <LogoArea />
      </Container>
    </Page>
  );
}
