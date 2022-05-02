import React from "react";
import { BoxTitleContainer } from "./BoxTitle.Styles";

// import { Container } from './styles';

const BoxTitle = ({subtitle}) => {
  return (
    <BoxTitleContainer>
      <div className="title-container">
        <h1 className="super">SUPER</h1>
        <h1 className="book">BOOK</h1>
        <h1 className="list">LIST</h1>
        <h1 className="exclamation-point">!</h1>
      </div>
      <h2>{subtitle}</h2>
    </BoxTitleContainer>
  );
};

export default BoxTitle;
