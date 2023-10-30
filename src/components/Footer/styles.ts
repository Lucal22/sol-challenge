import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    color: ${theme.colors.white};
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
