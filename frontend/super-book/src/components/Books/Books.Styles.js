import styled from "styled-components";

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  margin-right: 120px;
  padding: 10px;
  align-items: center;
  width: 85%;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    /* background: hsl(339, 75%, 48% / 1); */
    background: #eb9ab7;

    border-radius: 100vw;
    margin-block: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    /* background: hsl(339, 100%, 18% / 1); */
    background: #f50057;

    border: 0.1em solid white;
    border-radius: 100vw;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: hsl(339, 100%, 8% / 1);
  }
`;

export const BookLoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50%;

  h1 {
    font-size: 20px;
    font-weight: lighter;
  }

  h2 {
    font-size: 22px;
    font-weight: lighter;
    cursor: pointer;

    :hover {
      color: #f50057;
    }
  }
`;
