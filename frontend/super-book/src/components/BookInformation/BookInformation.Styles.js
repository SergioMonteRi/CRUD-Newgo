import styled from "styled-components";

export const BookInformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 200px;
  justify-content: space-between;
  margin-top: 15px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 20px;
  background-color: white;

  h1 {
    font-size: 15px;
    font-weight: lighter;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .book-information-container {
    .title-year {
      display: flex;
      flex-direction: row;

      .book-year {
        color: grey;
      }
    }

    .author-genre {
      h1 {
        font-size: 14px;
      }
    }
  }
`;
