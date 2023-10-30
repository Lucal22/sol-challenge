import Icons, { DarkAdd, DarkFavorites, Search } from "../../components/Icons";
import * as Styled from "./styles";

export default function Header() {
  return (
    <Styled.Container>
      <Styled.Logo>
        <a href="/">
          SS<span>BOOK</span>
        </a>
      </Styled.Logo>
      <Styled.Search>
        <input type="search" placeholder="Busque um livro" />
        <Styled.Button aria-label="Search for item">
          <Search />
        </Styled.Button>
      </Styled.Search>
      <Styled.Filter>
        <DarkAdd />
        <p>Adicionar</p>
      </Styled.Filter>
      <Styled.Filter>
        <DarkFavorites />
        <p>Favoritos</p>
      </Styled.Filter>
      <Styled.Separation />
      <Styled.Profile>
        <img src={Icons.avatar} alt="a" /> <p>Jucicreide</p>
      </Styled.Profile>
    </Styled.Container>
  );
}
