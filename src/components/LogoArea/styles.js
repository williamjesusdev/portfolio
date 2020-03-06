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
  height: 320px;
  width: 620px;
  top: 0;
  bottom: 0;
  left: 30%;
  right: 0;
  margin: auto;

  > svg {
    margin: auto;
    transform: rotate(45deg);

    > * #arrow {
      animation-delay: 1s;
      animation: ${svgAnimation} 20s;
    }
    > * #w {
      animation-delay: 1s;
      animation: ${svgAnimation} 15s;
    }
    > * #j {
      animation-delay: 1s;
      animation: ${svgAnimation} 10s;
    }
    > * #dot {
      animation-delay: 1s;
      animation: ${svgAnimation} 5s;
    }*/
  }


  @media(max-width: 920px) {
    display: none
  }

  @media(min-width: 1120px) {
    width: 720px;
  }
}
`;
