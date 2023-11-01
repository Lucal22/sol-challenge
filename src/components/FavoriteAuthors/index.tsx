import { useQuery } from "react-query";
import * as Styled from "./styles";
import fetchFavoriteAuthors from "../../hooks/useFavoriteAuthors";

const skeleton = [1, 2, 3];

export default function FavoriteAuthors() {
  const { data, isLoading } = useQuery(
    "favoriteAuthors",
    fetchFavoriteAuthors,
    {
      staleTime: Infinity,
    }
  );

  const favoriteAuthors = data?.data?.favoriteAuthors;

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>
          <h2>Artistas Favoritos</h2>
        </Styled.Title>
        <Styled.SeeAll>
          <p>ver todos</p>
        </Styled.SeeAll>
      </Styled.Header>
      <Styled.AuthorsArea>
        {isLoading
          ? skeleton.map((item) => (
              <Styled.Skeleton data-testid={"skeleton"} key={item} />
            ))
          : null}
        {favoriteAuthors
          ? favoriteAuthors.map((author) => {
              return (
                <Styled.AuthorsCard data-testid="authorsCard" key={author.id}>
                  <Styled.AuthorImg>
                    <img src={author.picture} alt={`Foto de ${author.name}`} />
                  </Styled.AuthorImg>
                  <Styled.AuthorDescription>
                    <p>{author.name}</p>
                    <p>{author.booksCount} livros</p>
                  </Styled.AuthorDescription>
                </Styled.AuthorsCard>
              );
            })
          : skeleton.map((item) => <Styled.Skeleton key={item} />)}
      </Styled.AuthorsArea>
    </Styled.Container>
  );
}
