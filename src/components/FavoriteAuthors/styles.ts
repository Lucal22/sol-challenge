import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  background-color: ${theme.background.white};
  margin-top: 32px;
  padding-top: 32px;
  border-radius: 32px 0px 0px 0px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);

  @media (min-width: 1280px) {
    margin-top: 27px;
    margin-left: 140px;
    padding: 32px 172px 0 32px;
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

export const AuthorsArea = styled.div`
  padding-top: 24px;
  padding-left: 22px;
  display: flex;
  overflow-x: scroll;
  gap: 21px;
  @media (min-width: 890px) {
    padding-left: 0;
    gap: 24px;
    justify-content: center;
  }
  &::-webkit-scrollbar {
    display: block;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.background.white};
  }
  &::-webkit-scrollbar-thumb:hover {
    width: 50px;
    height: 1px;
    background: ${theme.colors.details};
    border-radius: 5px;
  }
`;

export const AuthorsCard = styled.div`
  display: flex;
  min-width: 248px;
  gap: 16px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.border};
  align-items: center;

  @media (min-width: 1280px) {
    min-width: 296px;
  }
`;

export const AuthorImg = styled.div`
  position: relative;
  overflow: hidden;
  width: 63px;
  height: 67px;
  flex-shrink: 0;
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 1280px) {
    width: 68px;
    height: 68px;
  }
`;

export const AuthorDescription = styled.div`
  width: 100%;
  p:nth-child(1) {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
  }
  p:nth-child(2) {
    color: ${theme.colors.details};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
