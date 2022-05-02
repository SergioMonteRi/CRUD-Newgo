import React from "react";
import { LinkToAllBooksContainer } from "./LinkToAllBooks.Styles";
import { GrBook } from "react-icons/gr";
import { history } from "../../Routes/History";

const LinkToAllBooks = () => {
  const handleClick = () => {
    history.push("/showbooks");
  };

  return (
    <LinkToAllBooksContainer onClick={handleClick}>
      <div className="link-title">
        <h1>Clique aqui e visualize sua </h1>
        <h1>coleção de livros cadastrados</h1>
      </div>
      <div className="icon-link">
        <GrBook />
      </div>
    </LinkToAllBooksContainer>
  );
};

export default LinkToAllBooks;
