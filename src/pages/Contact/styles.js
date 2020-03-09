import styled from "styled-components";

export const Page = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    min-height: 100vw;
    min-width: 100vh;
  }
`;

export const Container = styled.div`
  position: absolute;
  will-change: contents;
  height: 94vh;
  width: 100%;
  margin: 0 auto;
  top: 5vh;
  bottom: 5vh;

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    min-height: 94vw;
    min-width: 100vh;
    top: 5vw;
    bottom: 5vw;
  }
`;
