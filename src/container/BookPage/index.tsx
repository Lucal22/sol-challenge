import { useParams } from "react-router-dom";
import * as Styled from "./styles";
import fetchBook from "../../hooks/useBook";
import { useQuery } from "react-query";
import {
  Back,
  DarkFavorites,
  Favorites,
  LightFavorite,
  Options,
  Save,
  Share,
} from "../../components/Icons";
import Header from "../../components/Header";

export default function BookPage() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => fetchBook(id as string),
    queryKey: "Book",
    staleTime: Infinity,
  });
  const book = data?.data.book;
  const paragraph = book ? book.description.split("\n\n") : [];
  return (
    <>
      <Styled.Nav>
        <Header />
      </Styled.Nav>
      <Styled.Container>
        {isLoading ? <div /> : null}
        {book ? (
          <>
            <Styled.Header>
              <h1>{book.name}</h1>
              <p>{book.author.name}</p>
              <Styled.BookDetails imgURL={book.cover}>
                <Styled.BookCoverSvg>
                  <a href="/">
                    <Back />
                  </a>
                  <Options />
                </Styled.BookCoverSvg>

                <figure>
                  <img src={book.cover} alt={`Capa do livro ${book.name}`} />
                </figure>
                <Styled.BookOptions>
                  <Styled.BookOptionsContent
                    isFavorite={book.isFavorite}
                    key="favorite"
                  >
                    {book.isFavorite ? (
                      <>
                        <Favorites />
                        <p>Remover dos favoritos</p>
                      </>
                    ) : (
                      <>
                        <DarkFavorites />
                        <p>Favoritar</p>
                      </>
                    )}
                  </Styled.BookOptionsContent>
                  <Styled.BookOptionsContent isFavorite={false}>
                    <Share />
                    <p>Compartilhar</p>
                  </Styled.BookOptionsContent>
                  <Styled.BookOptionsContent isFavorite={false}>
                    <Save />
                    <p>Salvar em uma lista</p>
                  </Styled.BookOptionsContent>
                </Styled.BookOptions>
              </Styled.BookDetails>
            </Styled.Header>

            <Styled.Content>
              <Styled.ContentHeader>
                <Styled.ContentTitle>
                  <h1>{book.name}</h1>
                  <p>{book.author.name}</p>
                </Styled.ContentTitle>
                <Styled.ContentHeaderFavorite>
                  {book.isFavorite ? <Favorites /> : <LightFavorite />}
                </Styled.ContentHeaderFavorite>
              </Styled.ContentHeader>
              <Styled.Description>
                {paragraph
                  ? paragraph.map((p, index) => (
                      <p data-testid="description" key={index}>
                        {p}
                      </p>
                    ))
                  : null}
                <Styled.AuthorDescription>
                  <h2>Sobre o Autor</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nostrum ipsam maxime, velit et obcaecati saepe, at odit quae
                    distinctio vero facilis provident a labore deserunt rem,
                    repellat architecto ea sunt.
                  </p>
                </Styled.AuthorDescription>
              </Styled.Description>
            </Styled.Content>
          </>
        ) : null}
      </Styled.Container>
    </>
  );
}
