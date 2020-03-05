import React from "react";

import { Tags } from "./styles";

export default function TagsArea() {
  return (
    <React.Fragment>
      <Tags>{"  <body>"}</Tags>
      <Tags top="30%">{"    <h1>"}</Tags>
      <Tags top="70%">{"    </h1>"}</Tags>
      <Tags top="auto" bottom="0">
        {"  </body> \n</html>"}
      </Tags>
    </React.Fragment>
  );
}
