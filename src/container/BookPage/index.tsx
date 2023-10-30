import { useParams } from "react-router-dom";
import * as Styled from "./styles";

export default function BookPage() {
  const { id } = useParams();

  return <Styled.Container>{id}</Styled.Container>;
}
