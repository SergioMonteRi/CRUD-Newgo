import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";

import { history } from "../../Routes/History";
import { BookEditFormContainer } from "./BookEditForm.Styles";

const BookEditForm = (bookInformation) => {
  const name = bookInformation.bookInformation.name;
  const author = bookInformation.bookInformation.author;
  const genre = bookInformation.bookInformation.genre;
  const year = bookInformation.bookInformation.year;
  const id = bookInformation.bookInformation.id;

  const book = { id, name, author, genre, year };

  const formik = useFormik({
    initialValues: {
      id: book.id,
      name: book.name,
      author: book.author,
      genre: book.genre,
      year: book.year,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nome obrigatório"),
      author: Yup.string().required("Autor obrigatório"),
      genre: Yup.string().required("Gênero obrigatório"),
      year: Yup.string().required("Ano obrigatório"),
    }),
    onSubmit: (values) => {
      axios
        .put(`http://localhost:8080/books/${id}`, values)
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
    },
  });

  return (
    <BookEditFormContainer>
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
          <h1>Em minha biblioteca vive</h1>
          <input
            id="name"
            type="text"
            placeholder={name}
            onChange={formik.handleChange}
            values={formik.values.name}
          ></input>
          {formik.errors.name ? <p>{formik.errors.name}</p> : null}

          <h1>Do autor</h1>
          <input
            id="author"
            type="text"
            placeholder={author}
            onChange={formik.handleChange}
            values={formik.values.author}
          ></input>
          {formik.errors.author ? <p>{formik.errors.author}</p> : null}

          <h1>Do gênero</h1>
          <input
            id="genre"
            type="text"
            placeholder={genre}
            onChange={formik.handleChange}
            values={formik.values.genre}
          ></input>
          {formik.errors.genre ? <p>{formik.errors.genre}</p> : null}

          <h1>Do ano</h1>
          <input
            id="year"
            type="number"
            placeholder={year}
            onChange={formik.handleChange}
            values={formik.values.year}
          ></input>
          {formik.errors.year ? <p>{formik.errors.year}</p> : null}

          <div className="btn-cadastrar">
            <button type="submit">Salvar edição</button>
          </div>
        </form>
      </div>
    </BookEditFormContainer>
  );
};

export default BookEditForm;
// const handleClick = () => {
//   axios
//     .put(`http://localhost:8080/books/${id}`, book)
//     .then(() => {
//       Swal.fire({
//         title: "Livro editado com sucesso!",
//         icon: "success",
//         confirmButtonText: "OK",
//       });
//     })
//     .then(history.push("/showbooks"))
//     .catch((error) => {
//       Swal.fire({
//         title: "Falha ao editar livro",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     });
// };
