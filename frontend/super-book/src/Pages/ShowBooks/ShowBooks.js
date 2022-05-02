import React from "react";
import BoxTitle from "../../components/BoxTitle/BoxTitle";
import { BoxLeft, BoxRight, Container } from "../../Styles/Global.Styles";
import showBooksImage from "../../Assets/show_books_img.svg";
import Books from "../../components/Books/Books";

const ShowBooks = () => {
  return (
    <Container>
      <BoxLeft>
        <BoxTitle subtitle={"Encontra aqui todos seus livros cadastrados."} />
        <img
          src={showBooksImage}
          alt="show_books"
          style={{ width: "90%" }}
        ></img>
      </BoxLeft>

      <BoxRight>
        <Books />
      </BoxRight>
    </Container>
  );
};

export default ShowBooks;
