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
  height: 100%;
  width: 50%;
  top: 0;
  bottom: 0;
  right: 5%;
  margin: auto;

  > svg {
    position: absolute;
    top: 5%;
    right: 10%;
    left: 10%;
    bottom: 0;

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

  @media(max-width: 940px) {
    display: none
  }

  @media(max-width: 1000px) {
    width: 80%;
    > svg {
      width: 95%;
    }
  }

  @media(max-width: 1060px) {
    width: 70%;
  }

  @media(max-width: 1180px) {
    width: 60%;
  }
}
`;
