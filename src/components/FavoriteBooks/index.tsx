import { useQuery } from "react-query";
import * as Styled from "./styles";
import fetchFavoriteBooks from "../../hooks/useFavoriteBooks";

const skeleton = [1, 2, 3, 4, 5, 6];

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
        {isLoading
          ? skeleton.map((item) => (
              <Styled.Skeleton data-testid="skeleton" key={item} />
            ))
          : null}
        {favoriteBooks
          ? favoriteBooks.map((books) => {
              return (
                <Styled.BookCard data-testid="favoriteBooksCard" key={books.id}>
                  <figure>
                    <a href={`/${books.id}`}>
                      <img src={books.cover} />
                    </a>
                  </figure>
                  <Styled.BookDescription>
                    <a href={`/${books.id}`}>
                      <p> {books.name}</p>
                    </a>
                    <p>{books.author.name}</p>
                  </Styled.BookDescription>
                </Styled.BookCard>
              );
            })
          : skeleton.map((item) => <Styled.Skeleton key={item} />)}
      </Styled.FavoriteBooksArea>
    </Styled.Container>
  );
}
