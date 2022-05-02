import React from "react";

import { BoxLeft, BoxRight, Container } from "../../Styles/Global.Styles";

import homeImage from "../../Assets/home_image.svg";
import BookForm from "../../components/BookForm/BookForm";
import LinkToAllBooks from "../../components/LinkToAllBooks/LinkToAllBooks";
import BoxTitle from "../../components/BoxTitle/BoxTitle";

const HomePage = () => {
  return (
    <Container>
      <BoxLeft>
        <BoxTitle subtitle="Cadastre os livros que moram em sua coleção." />
        <img src={homeImage} alt="home_image"></img>
      </BoxLeft>
      <BoxRight>
        <LinkToAllBooks />
        <BookForm />
      </BoxRight>
    </Container>
  );
};

export default HomePage;
