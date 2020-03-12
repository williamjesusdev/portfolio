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
  width: 40vw;
  margin: 0;
  top: 0;
  bottom: 0;
  right: 5vw;
  left: auto;

  > svg {
    position: absolute;
    margin: 0;
    top: 0;
    bottom: 0;
    right: 5vw;
    left: auto;
    max-height: 90vh;
    max-width: 100%;

    *#arrow {
      animation: ${svgAnimation} 20s;
    }
    *#w {
      animation: ${svgAnimation} 16s;
    }
    *#j {
      animation: ${svgAnimation} 8s;
    }
    *#dot {
      animation: ${svgAnimation} 2s;
    }
  }

  @media(max-width: 1079px) {
    display: none;
  }

  @media(max-width: 1359px) {
    right: 2vh;
    > svg {
      right: 2vh;
    }
  }
}
`;
