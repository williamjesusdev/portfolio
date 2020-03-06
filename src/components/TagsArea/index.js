import React from "react";

import { Container as Tags } from "./styles";

export default function TagsArea() {
  return (
    <React.Fragment>
      <Tags indent="30">{"<body>"}</Tags>
      <Tags indent="50" top="30%">
        {"<h1>"}
      </Tags>
      <Tags indent="50" top="70%">
        {"</h1>"}
      </Tags>
      <Tags indent="30" top="auto" bottom="0">
        {"</body> \n</html>"}
      </Tags>
    </React.Fragment>
  );
}
