import styled from "styled-components";

export const BoxTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 17px;
    font-weight: lighter;
    color: white;
  }
  .super {
    font-size: 3rem;
    color: #f50057;
  }

  .book {
    font-size: 4rem;
    color: white;
    margin-right: 4%;
  }

  .list {
    font-size: 4rem;
    color: white;
  }

  .exclamation-point {
    font-size: 4rem;
    color: #f50057;
  }
`;
