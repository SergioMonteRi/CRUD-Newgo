import styled from "styled-components";

export const LinkToAllBooksContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 157px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  margin-top: 8%;
  margin-bottom: 7%;
  padding: 40px;
  border: none;
  width: 70%;
  cursor: pointer;

  :hover {
    border: 2px solid #1A66B4;
  }

  .link-title {
    flex-direction: column;
  }

  .icon-link {
    font-size: 70px;
   
  }

  h1 {
    font-size: 18px;
    font-weight: lighter;
  }

 
`;
