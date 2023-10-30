import { theme } from "./../../styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 32px;
  @media (min-width: 1280px) {
    margin: 0 172px;
    padding-top: 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 20px;
  @media (min-width: 1280px) {
    margin: 0;
  }
`;

export const Title = styled.div`
  h1 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  @media (min-width: 1280px) {
    h1 {
      font-size: 28px;
    }
  }
`;

export const SeeAll = styled.div`
  p {
    cursor: pointer;
    color: ${theme.colors.purple};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  @media (min-width: 1280px) {
    p {
      font-size: 14px;
    }
  }
`;

export const FavoriteBooksArea = styled.div`
  padding-top: 21px;
  margin-left: 20px;
  gap: 20px;
  display: flex;
  overflow-x: auto;

  @media (min-width: 1280px) {
    overflow-x: scroll;
    margin: 0;
    padding-top: 24px;
    gap: 24px;
  }
  &::-webkit-scrollbar {
    display: block;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.background.gray};
  }
  &::-webkit-scrollbar-thumb:hover {
    height: 1px;
    background: ${theme.colors.details};
    border-radius: 5px;
  }
`;

export const BookCard = styled.div`
  width: 136px;
  figure {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 136px;
    height: 198px;
    border-radius: 8px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Skeleton = styled.div`
  min-width: 136px;
  height: 261px;
  background-color: ${theme.colors.border};
  border-radius: 8px;
`;

export const BookDescription = styled.div`
  p:nth-child(1) {
    cursor: pointer;
    margin-top: 10px;
    height: 36px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: break-spaces;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
  }
  p:nth-child(2) {
    color: ${theme.colors.details};
    margin-top: 2px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
