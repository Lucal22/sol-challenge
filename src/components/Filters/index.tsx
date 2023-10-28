import { useState } from "react";
import * as Styled from "./styles";

export default function Filters() {
  const [myBooks, setMyBooks] = useState(true);
  const [rent, setRent] = useState(false);
  return (
    <Styled.Container>
      <Styled.Filter isClicked={myBooks}>
        <p
          onClick={() => {
            setMyBooks(true);
            setRent(false);
          }}
        >
          Meus Livros
        </p>
        <div />
      </Styled.Filter>
      <Styled.Filter isClicked={rent}>
        <p
          onClick={() => {
            setRent(true);
            setMyBooks(false);
          }}
        >
          Emprestados
        </p>
        <div />
      </Styled.Filter>
    </Styled.Container>
  );
}
