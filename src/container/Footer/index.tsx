import * as Styled from "./styles";

export default function Footer() {
  return (
    <Styled.Container>
      <Styled.Logo>
        <a href="/">SSBOOK</a>
      </Styled.Logo>
      <Styled.Copyright>
        <p>Todos os direitos reservados. Studio Sol Books © 2023 </p>
      </Styled.Copyright>
    </Styled.Container>
  );
}
