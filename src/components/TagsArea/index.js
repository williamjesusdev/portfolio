import React from "react";

import { Container as Tags } from "./styles";

export default function TagsArea({ position, home }) {
  return (
    <React.Fragment>
      <Tags indent="30" top="0">
        {"<body>"}
      </Tags>
      <Tags indent="60" top="25">
        {"<h1>"}
      </Tags>
      <Tags indent="60" top={position || "32"} bottom="auto" home={home}>
        {"</h1>"}
      </Tags>
      <Tags indent="30" top="auto" bottom="0">
        {"</body> \n</html>"}
      </Tags>
    </React.Fragment>
  );
}
