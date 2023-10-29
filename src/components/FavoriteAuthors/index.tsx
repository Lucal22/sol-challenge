import { useQuery } from "react-query";
import * as Styled from "./styles";
import fetchFavoriteAuthors from "../../hooks/useFavoriteAuthors";

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
        {isLoading ? <div>loading</div> : null}
        {favoriteAuthors
          ? favoriteAuthors.map((author) => {
              return (
                <Styled.AuthorsCard key={author.id}>
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
          : null}
      </Styled.AuthorsArea>
    </Styled.Container>
  );
}
