import styled from "styled-components";

export const Tags = styled.pre`
  top: ${props => (props.top ? props.top : 0)};
  bottom: ${props => (props.bottom ? props.bottom : "auto")};

  left: 80px;
  position: absolute;
  color: #515152;
  font-size: 18px;
  font-family: "La Belle Aurore", cursive;
`;
