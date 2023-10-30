import { useQuery } from "react-query";
import { DarkAdd, DarkFavorites, Search } from "../../components/Icons";
import fetchPicture from "../../hooks/usePicture";
import * as Styled from "./styles";

export default function Header() {
  const { data, isLoading } = useQuery("usePicture", fetchPicture, {
    staleTime: Infinity,
  });

  const picture = data?.data.userPicture;
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
        {isLoading ? <Styled.Skeleton /> : null}
        {picture ? (
          <>
            <Styled.Avatar>
              <img src={picture} alt="a" />
            </Styled.Avatar>
            <p>Jucicreide</p>
          </>
        ) : (
          <Styled.Skeleton />
        )}
      </Styled.Profile>
    </Styled.Container>
  );
}
