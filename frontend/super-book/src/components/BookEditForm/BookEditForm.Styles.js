import styled from "styled-components";

export const BookEditFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 70%;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  margin-top: 20%;

  .form {
    padding: 40px;
    font-size: 10px;


    .btn-cadastrar {
      margin-top: 5%;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        margin-top: 2%;
        padding: 12px;
        width: 100%;
        border-radius: 10px;
        border: none;
        background-color: #F50057;
        font-weight: bold;
        color: white;
        font-size: 16px;
        cursor: pointer;
        
      }
    }

    input {
      width: 100%;
      padding: 10px;
      background-color: white;
      border: none;
      font-size: 15px;
      border: 1px solid #0984E3;
      border-radius: 5px;
    }

    h1 {
        margin-top: 4%;
        font-weight: lighter;
        font-size: 18px;
    }
  }
`;