import BooksArea from "../BooksArea";
import CategoryFilter from "../CategoryFilter";
import * as Styled from "./styles";

export default function BooksLibrary() {
  return (
    <Styled.Container>
      <Styled.Title>
        <h2>Biblioteca</h2>
      </Styled.Title>
      <CategoryFilter />
      <BooksArea />
    </Styled.Container>
  );
}
