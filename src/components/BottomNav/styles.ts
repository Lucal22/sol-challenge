import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

type BottomNavStyleTypes = {
  isHome: boolean;
};

export const Container = styled.div`
  z-index: 99;
  display: flex;
  position: fixed;
  gap: 26px;
  justify-content: center;
  padding: 9px 31px 9px 27px;
  bottom: 0;
  height: 56px;
  width: 100%;
  background-color: ${theme.background.white};
  box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.08);
  @media (min-width: 1280px) {
    display: none;
  }
`;

export const ButtonArea = styled.div<BottomNavStyleTypes>`
  ${({ isHome }) => css`
    display: flex;
    width: 56px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      color: ${isHome ? theme.colors.purple : theme.colors.nav};
      text-align: center;
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  `}
`;
