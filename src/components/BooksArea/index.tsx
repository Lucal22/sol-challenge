import { useQuery } from "react-query";
import fetchAllBooks from "../../hooks/useAllBooks";
import * as Styled from "./styles";
import { useCategoryFilter } from "../../hooks/useCategoryFilter";

const skeleton = [1, 2, 3];

export default function BooksArea() {
  const { data, isLoading } = useQuery("allBooks", fetchAllBooks, {
    staleTime: Infinity,
  });
  const { category } = useCategoryFilter();

  const filteredBooks =
    category === "ALL"
      ? data?.data.allBooks
      : data?.data.allBooks.filter((product) => product.category === category);

  return (
    <Styled.Container>
      {isLoading
        ? skeleton.map((item) => (
            <Styled.Skeleton data-testid="skeleton" key={item} />
          ))
        : null}
      {filteredBooks
        ? filteredBooks.map((books) => {
            return (
              <Styled.BookCard data-testid="bookCards" key={books.id}>
                <Styled.BookIcon>
                  <a href={`/${books.id}`}>
                    <img
                      src={books.cover}
                      alt={`Capa do livro ${books.name}`}
                    />
                  </a>
                </Styled.BookIcon>
                <Styled.BookDescription>
                  <a href={`/${books.id}`}>
                    <p>{books.name}</p>
                  </a>
                  <p>{books.author.name}</p>
                </Styled.BookDescription>
              </Styled.BookCard>
            );
          })
        : skeleton.map((item) => <Styled.Skeleton key={item} />)}
    </Styled.Container>
  );
}
