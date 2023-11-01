import { useState } from "react";
import * as Styled from "./styles";

export default function Filters() {
  const [myBooks, setMyBooks] = useState(true);
  const [rent, setRent] = useState(false);
  return (
    <Styled.Container>
      <Styled.Filter isClicked={myBooks}>
        <p
          data-testid="myBooksButton"
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
          data-testid="rentButton"
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
