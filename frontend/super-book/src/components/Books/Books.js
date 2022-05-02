import React, { useState, useEffect } from "react";
import BookInformation from "../BookInformation/BookInformation";
import { BookContainer, BookLoadingContainer } from "./Books.Styles";
import axios from "axios";
import ReactLoading from "react-loading";
import { history } from "../../Routes/History";
import Swal from "sweetalert2";

const Books = () => {
  const [book, setBook] = useState([""]);

  const handleDeleteBook = (res) => {
    if (res === true) {
      bookList();
    }
  };

  const bookList = async () => {
    await axios
      .get("http://localhost:8080/books")
      .then((res) => {
        setBook(res.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "Erro ao carregar livros",
          confirmButtonText: "OK",
        });
        history.push("/homepage");
      });
  };

  useEffect(() => {
    bookList();
  }, []);

  const handleClick = () => {
    history.push("/homepage");
  };

  return (
    <BookContainer>
      {book.length !== 0 ? (
        book.map((book) => (
          <BookInformation
            key={book.id}
            id={book.id}
            name={book.name}
            author={book.author}
            genre={book.genre}
            year={book.year}
            deleteBook={handleDeleteBook}
          ></BookInformation>
        ))
      ) : (
        <BookLoadingContainer>
          <ReactLoading type={"bubbles"} color={"#1A66B4"} />
          <h1>Você não possui livros cadastrados</h1>
          <h2 onClick={handleClick}>
            Clique aqui para cadastrar um livro em sua coleção
          </h2>
        </BookLoadingContainer>
      )}
    </BookContainer>
  );
};

export default Books;
