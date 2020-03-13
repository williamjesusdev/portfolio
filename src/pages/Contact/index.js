import React from "react";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";

import { Container, Label, Input, Text } from "./styles";

export default function About() {
  document.title = "Contato | William Jesus";
  return (
    <React.Fragment>
      <LogoArea />
      <TagsArea />
      <TextArea title="Contato">
        <Container>
          <Label htmlFor="name" hidden>
            Nome
          </Label>
          <Input placeholder="Nome" type="text" name="name" id="name" />

          <Label htmlFor="email" hidden>
            Email
          </Label>
          <Input placeholder="Email" type="text" name="email" id="email" />

          <Label htmlFor="subject" hidden>
            Assunto
          </Label>
          <Input
            placeholder="Assunto"
            width="96%"
            type="text"
            name="subject"
            id="subject"
          />

          <Label htmlFor="message" hidden>
            Mensagem
          </Label>
          <Text
            placeholder="Mensagem"
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></Text>
        </Container>
      </TextArea>
    </React.Fragment>
  );
}
