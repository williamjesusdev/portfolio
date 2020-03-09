import styled, { keyframes } from "styled-components";

const svgAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: absolute;
  height: 90vh;
  width: 50%;
  top: 0;
  bottom: 0;
  left: auto;
  right: 10%;
  margin: 0;

  > svg {
    position: absolute;
    top: 4vh;
    bottom: 4vh;
    left: auto;
    right: 10%;
    max-height: 80vh;
    margin: 0;

    > * #arrow {
      animation: ${svgAnimation} 15s -1s;
    }
    > * #w {
      animation: ${svgAnimation} 15s -1s;
    }
    > * #j {
      animation: ${svgAnimation} 15s -1s;
    }
    > * #dot {
      animation: ${svgAnimation} 15s -1s;
    }
  }

  @media(max-width: 939px) {
    display: none
  }

  @media(max-width: 1079px) {
    > svg {
      width: 96%;
    }
  }

  @media(max-width: 1359px) {
    right: 2%;
    > svg {
      right: 2%;
    }
  }
}
`;
