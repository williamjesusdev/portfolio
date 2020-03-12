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
  font-family: "Raleway", sans-serif;
  font-size: 4vh;
  font-weight: 900;
  color: #fff;
  user-select: none;

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    font-size: 5vw;
  }

  @media screen and (min-height: 320px) and (max-height: 819px) and (orientation: portrait) {
    left: 90px;
    font-size: 3vh;
  }
`;

export const Span = styled.span`
  color: #fff;
  font-size: 7.2vh;
  line-height: 7vh;
  letter-spacing: 2px;
  display: inline-block;
  transition: all 0.3s linear;

  &:hover {
    animation: ${rubberBand} 1s backwards;
    color: ${props => props.theme.second};
  }

  @media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
    font-size: 7.1vw;
    line-height: 7vw;
  }

  @media screen and (min-height: 320px) and (max-height: 819px) and (orientation: portrait) {
    font-size: 6.4vw;
  }
`;

export const Sub = styled.h2`
  color: #8d8d8d;
  margin-top: 35px;
  font-weight: 400;
  font-size: ${props => props.size || "12px"};
  font-family: "Open Sans", sans-serif;
  letter-spacing: 2px;
  animation: ${toAnimate} 1s 5s backwards;
`;

export const Button = styled.button`
  background: ${props => props.theme.background || "white"};
  color: ${props => props.theme.primary || "palevioletred"};

  margin-top: 20px;
  cursor: pointer;
  font-size: 0.7em;
  font-family: "Roboto", sans-serif;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.primary || "palevioletred"};
  border-radius: 3px;
  animation: ${toAnimate} 1s 5s backwards;
`;

export const Paragraph = styled.div`
  color: #fff;
  width: 45vw;
  margin-top: 35px;
  font-size: 16px;
  font-weight: 300;
  animation: ${toAnimate} 1s 2s backwards;

  > * {
    margin: 10px auto;
  }

  @media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
    width: 70vw;
    font-size: 15px;
  }

  @media screen and (min-height: 320px) and (max-height: 819px) and (orientation: portrait) {
    width: 38vh;
    font-size: 15px;
    & > p:nth-child(n + 3) {
      display: none;
    }
    &: after {
      content: "Vamos Conversar!?";
    }
  }
`;

export const Title = styled.h1`
  font-size: 4.5vh;
  font-weight: 900;
  color: ${props => props.theme.primary};

  @media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
    font-size: 5vw;
  }
`;
