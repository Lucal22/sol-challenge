import { Add, Favorites, Home, Search } from "../Icons";
import * as Styled from "./styles";

export default function BottomNav() {
  return (
    <Styled.Container>
      <Styled.ButtonArea isHome={true}>
        <a href="/">
          <Home />
          <p>Início</p>
        </a>
      </Styled.ButtonArea>
      <Styled.ButtonArea isHome={false}>
        <Add />
        <p>Adicionar</p>
      </Styled.ButtonArea>
      <Styled.ButtonArea isHome={false}>
        <Search />
        <p>Buscar</p>
      </Styled.ButtonArea>
      <Styled.ButtonArea isHome={false}>
        <Favorites />
        <p>Favoritos</p>
      </Styled.ButtonArea>
    </Styled.Container>
  );
}
