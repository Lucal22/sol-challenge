import FavoriteBooks from "../../components/FavoriteBooks";
import Filters from "../../components/Filters";
import * as Styled from "./styles";

export default function HomePage() {
  return (
    <Styled.Container>
      <Filters />
      <FavoriteBooks />
    </Styled.Container>
  );
}
