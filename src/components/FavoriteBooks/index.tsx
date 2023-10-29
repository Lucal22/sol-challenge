import { useQuery } from "react-query";
import * as Styled from "./styles";
import fetchFavoriteBooks from "../../hooks/useFavoriteBooks";

export default function FavoriteBooks() {
  const { data, error, isLoading } = useQuery(
    "favoriteBooks",
    fetchFavoriteBooks,
    { staleTime: Infinity }
  );
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    console.log();
  }

  if (data) {
    const favoriteBooks = data.data.favoriteBooks;

    return (
      <Styled.Container>
        <Styled.Header>
          <Styled.Title>
            <h1>Livros Favoritos</h1>
          </Styled.Title>
          <Styled.AllBooks>
            <p>ver todos</p>
          </Styled.AllBooks>
        </Styled.Header>
        <Styled.FavoriteBooksArea>
          {favoriteBooks.map((books) => {
            return (
              <Styled.BookCard key={books.id} href={`/${books.id}`}>
                <img src={books.cover} />
                <p> {books.name}</p>
                <p>{books.author.name}</p>
              </Styled.BookCard>
            );
          })}
        </Styled.FavoriteBooksArea>
      </Styled.Container>
    );
  }
}
