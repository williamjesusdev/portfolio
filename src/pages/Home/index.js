import React from "react";

import { Page, Container } from "./styles";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";

export default function Home() {
  document.title = "William's Portfólio";

  return (
    <Page>
      <Container>
        <LogoArea />
        <TagsArea />
        <TextArea />
      </Container>
    </Page>
  );
}
