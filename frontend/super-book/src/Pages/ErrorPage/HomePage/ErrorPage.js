import React from "react";

import erroImage from "../../../Assets/error_img.svg";
import BoxTitle from "../../../components/BoxTitle/BoxTitle";
import { history } from "../../../Routes/History";
import { BoxLeft, BoxRight, Container } from "../../../Styles/Global.Styles";
import { BoxErrorImg, ErrorContainer } from "./ErrorPage.Styles";

const ErrorPage = () => {
  const handleClick = () => {
    history.goBack();
  };

  return (
    <Container>
      <BoxLeft>
        <BoxTitle subtitle="Algo deu errado..." />
        <BoxErrorImg>
          <img src={erroImage} alt="home_image"></img>
        </BoxErrorImg>
      </BoxLeft>
      <BoxRight>
        <ErrorContainer onClick={handleClick}>
          <h1>Oops!</h1>
          <h2>Parece que algo deu errado!</h2>
          <h2>Clique aqui para ser redirecionado de volta</h2>
        </ErrorContainer>
      </BoxRight>
    </Container>
  );
};

export default ErrorPage;
