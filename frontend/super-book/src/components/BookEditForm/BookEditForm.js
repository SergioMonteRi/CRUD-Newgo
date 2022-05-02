import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { history } from "../../Routes/History";
import { BookEditFormContainer } from "./BookEditForm.Styles";

const BookEditForm = (bookInformation) => {
  const [name, setName] = useState(bookInformation.bookInformation.name);
  const [author, setAuthor] = useState(bookInformation.bookInformation.author);
  const [genre, setGenre] = useState(bookInformation.bookInformation.genre);
  const [year, setYear] = useState(bookInformation.bookInformation.year);
  const id = bookInformation.bookInformation.id;

  const book = { id, name, author, genre, year };

  const handleClick = () => {
    axios
      .put(`http://localhost:8080/books/${id}`, book)
      .then(() => {
        Swal.fire({
          title: "Livro editado com sucesso!",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .then(history.push("/showbooks"))
      .catch((error) => {
        Swal.fire({
          title: "Falha ao editar livro",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <BookEditFormContainer>
      <div className="form">
        <form onSubmit={handleClick}>
          <h1>Em minha biblioteca vive</h1>
          <input
            id="bookName"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome do livro"
          ></input>

          <h1>Do autor</h1>
          <input
            placeholder="Autor"
            value={author}
            id="author"
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
          ></input>

          <h1>Do gênero</h1>
          <input
            placeholder="Gênero"
            value={genre}
            id="genre"
            type="text"
            onChange={(e) => setGenre(e.target.value)}
          ></input>

          <h1>Do ano</h1>
          <input
            placeholder="Ano"
            value={year}
            id="year"
            type="text"
            onChange={(e) => setYear(e.target.value)}
          ></input>
          <div className="btn-cadastrar">
            <button type="submit">Salvar edição</button>
          </div>
        </form>
      </div>
    </BookEditFormContainer>
  );
};

export default BookEditForm;
