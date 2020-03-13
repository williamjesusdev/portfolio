import React from "react";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";

export default function Home() {
  document.title = "William Jesus";

  return (
    <React.Fragment>
      <LogoArea />
      <TagsArea position="50" home={true} />
      <TextArea
        home={true}
        pre={"Hi,~I'm William,~Web Developer!"}
        title={"Oi,~Eu Sou William,~Desenvolvedor Web!"}
        subtitle={"Back-End(NodeJS) / Front-End(ReactJS) / Mobile(ReactNative)"}
      ></TextArea>
    </React.Fragment>
  );
}
