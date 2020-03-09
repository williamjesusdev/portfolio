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
        <TagsArea position="36" />
        <TextArea text="About Me">
          <p>
            I am a Systems Analyst graduated in 2015 from Universidade
            Anhanguera in São Paulo, currently working as an ERP Systems Analyst
            at Confecções e Representações J. Sá no Brás, where I have been
            allocated since 2009.
          </p>
          <p>
            My desire for knowledge has always motivated me to seek growth and
            new challenges, so today I study Full Stack Development (NodeJS,
            ReactJs and React Native).
          </p>
          <p>
            New challenges motivate me, so I continue to expand my skills,
            through studies and projects, seeking to realize solutions in
            multiplus environments. Follow my profiles and / or contact us to
            exchange knowledge.
          </p>
        </TextArea>
      </Container>
    </Page>
  );
}
