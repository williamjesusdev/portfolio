import styled from "styled-components";

export const Container = styled.pre`
  top: ${props => (props.top ? props.top + "vh" : "auto")};
  bottom: ${props => (props.bottom ? props.bottom + "vh" : "auto")};
  text-indent: ${props => (props.indent ? props.indent + "px" : "0")};

  position: absolute;
  left: 80px;
  color: #515152;
  font-size: 18px;
  font-family: "La Belle Aurore", cursive;
  user-select: none;

  @media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
    &:nth-child(1n) {
      top: ${props => (props.top ? props.top + "vw" : "auto")};
      bottom: ${props => (props.bottom ? props.bottom + "vw" : "auto")};
    }
  }

  @media screen and (min-height: 320px) and (max-height: 819px) and (orientation: portrait) {
    left: 65px;
    font-size: 16px;
    &:nth-child(n) {
      text-indent: ${props => (props.indent ? props.indent - 20 + "px" : "0")};
    }
    &:nth-child(3) {
      text-indent: ${props => (props.indent ? props.indent - 35 + "px" : "0")};
    }
    &:nth-child(4) {
      text-indent: ${props => (props.indent ? props.indent - 35 + "px" : "0")};
      top: ${props =>
        props.top && props.home ? props.top - 8 + "vh" : props.top + "vh"};
    }
  }
`;
