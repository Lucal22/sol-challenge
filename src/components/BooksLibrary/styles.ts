import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 92px;
  color: ${theme.colors.title};
  background-color: ${theme.background.white};
  @media (min-width: 1280px) {
    margin-left: 140px;
    padding: 32px 172px 60px 32px;
  }
`;

export const Title = styled.div`
  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  @media (min-width: 1280px) {
    h2 {
      font-size: 28px;
    }
  }
`;
