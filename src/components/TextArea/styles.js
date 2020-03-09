import styled, { keyframes } from "styled-components";

const toAnimate = keyframes`
0%{
  opacity: 0
}
100%{
  opacity: 1
}
`;

const rubberBand = keyframes`
from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 33%;
  left: 130px;
  font-size: 28px;
  font-weight: 900;
`;

export const Span = styled.span`
  margin-right: 0.8%;
  font-size: 56px;
  line-height: 53px;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  display: inline-block;

  &:hover {
    color: ${props => props.theme.second};
    animation-name: ${rubberBand};
  }
`;

export const Sub = styled.h2`
  color: #8d8d8d;
  margin-top: 25px;
  font-weight: 400;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 3px;
  -webkit-animation: myanim2 1s 1.8s backwards;
  animation: ${toAnimate} 1s 3.8s backwards;
`;
