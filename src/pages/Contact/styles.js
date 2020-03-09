import styled from "styled-components";

export const Page = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    min-height: 100vw;
    min-width: 100vh;
  }
`;

export const Container = styled.div`
  position: absolute;
  will-change: contents;
  height: 94%;
  width: 100%;
  min-height: 566px;
  margin: 0 auto;
  top: 5%;
`;
