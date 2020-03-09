import React from "react";

import { Container as Tags } from "./styles";

export default function TagsArea({ position }) {
  return (
    <React.Fragment>
      <Tags indent="30">{"<body>"}</Tags>
      <Tags indent="50" top="30%">
        {"<h1>"}
      </Tags>
      <Tags indent="50" top="auto" bottom={position || "40%"}>
        {"</h1>"}
      </Tags>
      <Tags indent="30" top="auto" bottom="0">
        {"</body> \n</html>"}
      </Tags>
    </React.Fragment>
  );
}
