import styled from "styled-components";

export const BoxErrorImg = styled.div`
  /* font-size: 400px; */
  img {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 500px;
    height: 400px;
  }
`;

export const PaginationContainer = styled.div`
  width: 100%;
  height: 15%;
  background-color: yellow;
`;

export const ErrorContainer = styled.button`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 35%;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 25%;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  cursor: pointer;
  border: none;

  h1 {
    font-size: 22px;
  }

  h2 {
    font-size: 17px;
  }

   :hover{
     border: 2px solid #F50057;
   }

`;
