import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Montserrat, sans-serif;
  } 
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  background-color: #f1edfc;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const BoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1a66b4;
  width: 110%;
  height: 100vh;
  position: relative;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  justify-content: space-between;
  padding-top: 5%;
  align-items: center;
`;

export const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1edfc;
  width: 100vw;
  height: 100vh;
  padding-left: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const BoxSubtitle = styled.div`
  font-size: 1rem;
  color: white;
`;
