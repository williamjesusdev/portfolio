import React from "react";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";

import { Page, Container } from "./styles";

export default function Works() {
  document.title = "My Works | William's Portfólio";

  return (
    <Page>
      <Container>
        <TagsArea />
        <TextArea text="My Works" />
        <LogoArea />
      </Container>
    </Page>
  );
}
