import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  color: ${theme.colors.white};
  background-color: ${theme.colors.purple};
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1280px) {
    padding: 16px 172px;
    background-color: ${theme.colors.purple};
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  a {
    font-family: ${theme.font.bebas};
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px;
  }
`;

export const Copyright = styled.div`
  width: 158px;
  p {
    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
