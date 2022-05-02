import axios from "axios";
import React from "react";
import { DeleteButton } from "../DeleteButton/DeleteButton.Styles";

import { BookInformationContainer } from "./BookInformation.Styles";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { EditButton } from "../EditButton/EditButton.Styles";

const BookInformation = ({ id, name, author, genre, year, deleteBook }) => {
  const book = { id, name, author, genre, year };

  const handleDelete = () => {
    Swal.fire({
      title: `Deseja realmente excluir o livro: ${name} ?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Deletar",
      denyButtonText: `Não deletar`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8080/books/${id}`)
          .then(deleteBook(true))
          .catch((error) => {
            Swal.fire({
              title: "Falha ao deletar livro",
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      } else if (result.isDenied) {
        Swal.fire("O livro não será excluído");
      }
    });
  };

  return (
    <BookInformationContainer>
      <div className="book-information-container">
        <div className="title-year">
          <h1 className="book-name">{name},</h1>
          <h1 className="book-year">{year}</h1>
        </div>
        <div className="author-genre">
          <h1>{author}</h1>
          <h1>{genre} </h1>
        </div>
      </div>
      <div className="btn-container">
        <Link to={{ pathname: "/editbook", state: book }}>
          <EditButton>Editar</EditButton>
        </Link>
        <DeleteButton onClick={handleDelete}>Excluir</DeleteButton>
      </div>
    </BookInformationContainer>
  );
};

export default BookInformation;
