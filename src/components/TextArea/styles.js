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
0% {
  -webkit-transform: scale3d(1,1,1);
  -ms-transform: scale3d(1,1,1);
  transform: scale3d(1,1,1)
}

30% {
  -webkit-transform: scale3d(1.25,.75,1);
  -ms-transform: scale3d(1.25,.75,1);
  transform: scale3d(1.25,.75,1)
}

40% {
  -webkit-transform: scale3d(.75,1.25,1);
  -ms-transform: scale3d(.75,1.25,1);
  transform: scale3d(.75,1.25,1)
}

50% {
  -webkit-transform: scale3d(1.15,.85,1);
  -ms-transform: scale3d(1.15,.85,1);
  transform: scale3d(1.15,.85,1)
}

65% {
  -webkit-transform: scale3d(.95,1.05,1);
  -ms-transform: scale3d(.95,1.05,1);
  transform: scale3d(.95,1.05,1)
}

75% {
  -webkit-transform: scale3d(1.05,.95,1);
  -ms-transform: scale3d(1.05,.95,1);
  transform: scale3d(1.05,.95,1)
}

100% {
  -webkit-transform: scale3d(1,1,1);
  -ms-transform: scale3d(1,1,1);
  transform: scale3d(1,1,1)
}
`;

export const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 145px;
  user-select: none;

  color: #eee;
  font-size: 4vh;

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    font-size: 5vw;
  }

  @media screen and (min-height: 320px) and (max-height: 819px) and (orientation: portrait) {
    font-size: 3vh;
    left: 90px;
  }
`;

export const Span = styled.span`
  letter-spacing: 0.05em;
  line-height: 7vh;
  font-size: 7.2vh;
  font-family: "Coolvetica";
  display: inline-block;
  transition: all 0.3s linear;

    &:hover {
      animation: ${rubberBand} 1s ease backwards;
      color: ${props => props.theme.second};
    }

    > span {
      margin-left: 0.1em;
      color: ${props => props.theme.second};
    }
  }

  @media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
    font-size: 7.1vw;
    line-height: 7vw;
  }

  @media screen and (min-height: 320px) and (max-height: 819px) and (orientation: portrait) {
    font-size: 7vw;
    line-height: 8vw;
  }
`;

export const Sub = styled.h2`
  margin-top: 35px;
  color: #8d8d8d;
  font-size: ${props => props.size || ".38em"};
  letter-spacing: 0.25em;
  opacity: 0;

  &.fast {
    animation: ${toAnimate} 1s 2s backwards;
    opacity: 1;
  }

  &.active {
    animation: ${toAnimate} 2s backwards;
    opacity: 1;
  }

  @media screen and (min-height: 320px) and (max-height: 819px) and (orientation: portrait) {
    font-size: 0.45em;
  }
`;

export const Button = styled.button`
  background: ${props => props.theme.background};
  color: ${props => props.theme.primary};
  opacity: 0;

  margin-top: 30px;
  cursor: pointer;
  font-size: 0.6em;
  letter-spacing: 0.1em;
  padding: 0.5em 1em;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 3px;

  &.active {
    animation: ${toAnimate} 2s backwards;
    opacity: 1;
  }
`;

export const Paragraph = styled.div`
  width: 40vw;
  margin-top: 35px;
  font-size: 0.55em;
  animation: ${toAnimate} 1s 2s backwards;

  > * {
    margin: 10px auto;
  }

  @media screen and (max-width: 1079px) {
    width: 50vw;
  }

  @media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
    width: 70vw;
    font-size: 0.5em;
  }

  @media screen and (min-height: 320px) and (max-height: 819px) and (orientation: portrait) {
    width: 38vh;
    font-size: 0.7em;
    & > p:nth-child(2) {
      display: none;
    }
    & > p:nth-child(4) {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  letter-spacing: 0.1em;
  font-size: 4vh;
  font-family: "Coolvetica";
  font-weight: 400 !important;
  color: ${props => props.theme.primary};

  > span {
    margin-left: 0.1em;
    color: ${props => props.theme.second};
  }

  @media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
    font-size: 5vw;
  }
`;
