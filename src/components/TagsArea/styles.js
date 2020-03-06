import styled from "styled-components";

export const Container = styled.pre`
  top: ${props => (props.top ? props.top : 0)};
  bottom: ${props => (props.bottom ? props.bottom : "auto")};

  left: 80px;
  text-indent: ${props => (props.indent ? props.indent + "px;" : "0;")}
  position: absolute;
  color: #515152;
  font-size: 18px;
  font-family: "La Belle Aurore", cursive;
`;
