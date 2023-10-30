import BooksLibrary from "../../components/BooksLibrary";
import FavoriteAuthors from "../../components/FavoriteAuthors";
import FavoriteBooks from "../../components/FavoriteBooks";
import Filters from "../../components/Filters";
import * as Styled from "./styles";

export default function HomePage() {
  return (
    <Styled.Container>
      <Filters />
      <FavoriteBooks />
      <FavoriteAuthors />
      <BooksLibrary />
    </Styled.Container>
  );
}
