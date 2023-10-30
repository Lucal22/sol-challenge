import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

type BookPageStyleTypes = {
  isFavorite: boolean;
};

export const Container = styled.div`
  min-height: 100vh;
  @media (min-width: 1280px) {
    margin-left: 140px;
  }
`;

export const Nav = styled.div`
  display: none;
  @media (min-width: 950px) {
    display: block;
  }
`;

export const Header = styled.div`
  position: relative;
  height: 261px;
  h1,
  p {
    display: none;
  }
  @media (min-width: 950px) {
    margin-top: 24px;
    height: 100%;
    padding-left: 352px;
    margin-right: 172px;
    h1,
    p {
      display: block;
    }
    h1 {
      color: ${theme.colors.title};
      font-size: 34px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    p {
      color: ${theme.colors.details};
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

type BookPageStyleType = {
  imgURL: string;
};

export const BookDetails = styled.div<BookPageStyleType>`
  ${({ imgURL }) => css`
    padding: 20px;
    z-index: 1;
    width: 360px;
    height: 433px;
    position: absolute;
    top: 0;
    background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%),
      url(${imgURL});
    background-repeat: no-repeat;
    background-size: cover;
    svg {
      cursor: pointer;
    }
    figure {
      display: none;
    }
    @media (min-width: 380px) {
      margin-left: 32px;
      padding: 0;
    }
    @media (min-width: 950px) {
      position: absolute;
      left: 0;
      background: none;
      z-index: 50;
      width: 296px;
      height: auto;
      border-radius: 8px;

      figure {
        display: block;
        width: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 8px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  `}
`;

export const BookCoverSvg = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 950px) {
    display: none;
  }
`;

export const BookOptions = styled.div`
  display: none;
  @media (min-width: 950px) {
    display: block;
    padding-top: 33.5px;
  }
`;

export const BookOptionsContent = styled.div<BookPageStyleTypes>`
  ${({ isFavorite }) => css`
    padding-bottom: 25px;
    display: flex;
    gap: 12px;
    align-items: center;
    p {
      cursor: pointer;
      color: ${isFavorite ? theme.colors.details : theme.colors.title};
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  `}
`;

export const Content = styled.div`
  z-index: 49;
  position: relative;
  padding: 32px 20px;
  background-color: ${theme.background.white};
  border-radius: 32px 0px 0px 0px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);

  @media (min-width: 950px) {
    margin-top: 24px;
  }

  @media (min-width: 1280px) {
    padding: 24px 172px 60px 0;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    min-height: 600px;
  }
`;
export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 950px) {
    display: none;
  }
`;

export const ContentTitle = styled.div`
  h1 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    padding-top: 8px;
    padding-bottom: 20px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${theme.colors.details};
  }
`;

export const ContentHeaderFavorite = styled.div``;

export const Description = styled.div`
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    padding-bottom: 20px;
  }
  @media (min-width: 950px) {
    padding-left: 352px;
  }

  @media (min-width: 1280px) {
    p {
      font-size: 18px;
      padding-bottom: 20px;
    }
  }
`;

export const AuthorDescription = styled.div`
  h2 {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    padding-bottom: 20px;
  }
  @media (min-width: 1280px) {
    h2 {
      font-size: 28px;
    }
    p {
      font-size: 18px;
      padding-bottom: 20px;
    }
  }
`;
