import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

type CategoryFilterStyleTypes = {
  active: boolean;
};

export const Container = styled.div`
  overflow-x: scroll;
  padding-top: 21px;
  display: flex;
  gap: 8px;
  @media (min-width: 1280px) {
    padding-top: 24px;
  }
  &::-webkit-scrollbar {
    display: block;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.background.white};
  }
  &::-webkit-scrollbar-thumb:hover {
    height: 1px;
    background: ${theme.colors.details};
    border-radius: 5px;
  }
`;

export const Categories = styled.button<CategoryFilterStyleTypes>`
  cursor: pointer;
  height: 32px;
  padding: 6px 16px;
  border-radius: 16px;
  border: 1px solid;
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  ${({ active }) => css`
    background-color: ${active ? theme.colors.purple : theme.background.white};
    border-color: ${active ? theme.colors.purple : theme.colors.border};
    p {
      color: ${active ? theme.colors.white : theme.colors.details};
    }
  `}
`;
