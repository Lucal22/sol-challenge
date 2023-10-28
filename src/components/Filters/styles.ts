import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

type FiltersStyleType = {
  isClicked: boolean;
};

export const Container = styled.div`
  display: flex;
  position: relative;
  gap: 40px;
  width: 100%;
  padding-top: 16px;
  background-color: ${theme.background.white};
  border-radius: 0px 0px 32px 0px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);
  @media (min-width: 1280px) {
    padding-top: 40px;
    border-bottom: 1px solid ${theme.colors.border};
  }
`;

export const Filter = styled.div<FiltersStyleType>`
  ${({ isClicked }) => css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    width: 94px;
    p {
      cursor: pointer;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    div {
      display: ${isClicked ? "block" : "none"};
      width: 94px;
      height: 4px;
      border-radius: 2px 2px 0px 0px;
      background: #a076f2;
    }
  `}
`;
