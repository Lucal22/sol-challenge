import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 296px);
  gap: 20px;

  @media (min-width: 1280px) {
    padding-top: 14px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 296px);
    gap: 24px;
    min-height: 348px;
  }
`;

export const BookCard = styled.div`
  width: 320px;
  display: flex;
  gap: 10px;
  align-items: center;
  @media (min-width: 1280px) {
    min-width: 296px;
    max-height: 100px;
    gap: 16px;
  }
`;

export const BookIcon = styled.figure`
  cursor: pointer;
  width: 68px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BookDescription = styled.div`
  p:nth-child(1) {
    height: 36px;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: break-spaces;
  }

  p:nth-child(2) {
    padding-top: 6px;
    color: ${theme.colors.details};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
