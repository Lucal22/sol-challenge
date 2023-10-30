import { useParams } from "react-router-dom";
import * as Styled from "./styles";
import fetchBook from "../../hooks/useBook";
import { useQuery } from "react-query";

export default function BookPage() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => fetchBook(id as string),
    queryKey: "Book",
    staleTime: Infinity,
  });
  const book = data?.data.book;
  return (
    <Styled.Container>
      {isLoading ? <div>loading</div> : null}
      {book ? <>{book?.name}</> : null}
    </Styled.Container>
  );
}
