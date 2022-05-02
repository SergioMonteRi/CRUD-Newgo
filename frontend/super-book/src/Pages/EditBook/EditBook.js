import React from "react";
import BoxTitle from "../../components/BoxTitle/BoxTitle";
import { BoxLeft, BoxRight, Container } from "../../Styles/Global.Styles";
import editImage from "../../Assets/edit_book_img.svg";
import BookEditForm from "../../components/BookEditForm/BookEditForm";

const EditBook = (props) => {
  const bookInfo = props.location.state;

  return (
    <Container>
      <BoxLeft>
        <BoxTitle subtitle={"Edite aqui um livro de sua coleção."} />
        <img src={editImage} alt="show_books" style={{ width: "90%" }}></img>
      </BoxLeft>
      <BoxRight>
        <BookEditForm bookInformation={bookInfo} />
      </BoxRight>
    </Container>
  );
};

export default EditBook;
