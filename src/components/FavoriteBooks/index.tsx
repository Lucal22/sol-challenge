import { useQuery } from "react-query";
import * as Styled from "./styles";
import fetchFavoriteBooks from "../../hooks/useFavoriteBooks";

export default function FavoriteBooks() {
  const { data, isLoading } = useQuery("favoriteBooks", fetchFavoriteBooks, {
    staleTime: Infinity,
  });

  const favoriteBooks = data?.data?.favoriteBooks;

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>
          <h2>Livros Favoritos</h2>
        </Styled.Title>
        <Styled.SeeAll>
          <p>ver todos</p>
        </Styled.SeeAll>
      </Styled.Header>
      <Styled.FavoriteBooksArea>
        {isLoading ? <div>Loading</div> : null}
        {favoriteBooks
          ? favoriteBooks.map((books) => {
              return (
                <Styled.BookCard key={books.id} href={`/${books.id}`}>
                  <figure>
                    <img src={books.cover} />
                  </figure>
                  <p> {books.name}</p>
                  <p>{books.author.name}</p>
                </Styled.BookCard>
              );
            })
          : null}
      </Styled.FavoriteBooksArea>
    </Styled.Container>
  );
}
