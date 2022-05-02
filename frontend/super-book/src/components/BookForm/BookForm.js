import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { BookFormContainer } from "./BookForm.Styles";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      author: "",
      genre: "",
      year: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nome obrigatório"),
      author: Yup.string().required("Autor obrigatório"),
      genre: Yup.string().required("Gênero obrigatório"),
      year: Yup.string().required("Ano obrigatório"),
    }),
    onSubmit: (values, { resetForm }) => {
      axios
        .post("http://localhost:8080/books", values)
        .then((res) => {
          Swal.fire({
            title: "Livro adicionado com sucesso",
            icon: "sucess",
            confirmButtonText: "OK",
          }).then(() => {
            resetForm();
          });
        })
        .catch((error) => {
          Swal.fire({
            title: "Falha ao adicionar livro",
            icon: "error",
            confirmButtonText: "OK",
          });
        });
    },
  });

  return (
    <BookFormContainer>
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
          <h1>Em minha biblioteca vive</h1>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nome do livro"
            onChange={formik.handleChange}
            values={formik.values.name}
          ></input>
          {formik.errors.name ? <p>{formik.errors.name}</p> : null}

          <h1>Do autor</h1>
          <input
            id="author"
            name="author"
            placeholder="Autor"
            type="text"
            onChange={formik.handleChange}
            values={formik.values.author}
          ></input>
          {formik.errors.author ? <p>{formik.errors.author}</p> : null}

          <h1>Do gênero</h1>
          <input
            id="genre"
            name="genre"
            placeholder="Gênero"
            type="text"
            onChange={formik.handleChange}
            values={formik.values.genre}
          ></input>
          {formik.errors.genre ? <p>{formik.errors.genre}</p> : null}

          <h1>Do ano</h1>
          <input
            id="year"
            name="year"
            placeholder="Ano"
            type="number"
            onChange={formik.handleChange}
            values={formik.values.year}
          ></input>
          {formik.errors.year ? <p>{formik.errors.year}</p> : null}

          <div className="btn-cadastrar">
            <button type="submit">Cadastar</button>
          </div>
        </form>
      </div>
    </BookFormContainer>
  );
};

export default BookForm;
