import React from "react";

import { Page, Container } from "./styles";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";

export default function Home() {
  return (
    <Page>
      <Container>
        <TagsArea />
        <TextArea />
        <LogoArea />
      </Container>
    </Page>
  );
}
