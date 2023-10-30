import { useQuery } from "react-query";
import fetchAllBooks from "../../hooks/useAllBooks";
import * as Styled from "./styles";
import { useCategoryFilter } from "../../hooks/useCategoryFilter";

export default function BooksArea() {
  const { data, isLoading } = useQuery("allBooks", fetchAllBooks, {
    staleTime: Infinity,
  });
  const { category } = useCategoryFilter();
  if (isLoading) {
    return <div>loading</div>;
  }
  const filteredBooks =
    category === "ALL"
      ? data?.data.allBooks
      : data?.data.allBooks.filter((product) => product.category === category);

  return (
    <Styled.Container>
      {filteredBooks?.map((books) => {
        return (
          <Styled.BookCard key={books.id}>
            <Styled.BookIcon>
              <a href={`/${books.id}`}>
                <img src={books.cover} alt={`Capa do livro ${books.name}`} />
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
      })}
    </Styled.Container>
  );
}
