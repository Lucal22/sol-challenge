import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  background-color: ${theme.background.white};
  padding: 6px 20px;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1280px) {
    justify-content: space-around;
    padding: 12px 32px 12px 172px;
    margin-right: 140px;
    border-radius: 0px 0px 32px 0px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    gap: 24px;
  }
`;

export const Logo = styled.div`
  a {
    color: ${theme.colors.title};
    font-family: ${theme.font.bebas};
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px;
    span {
      color: ${theme.colors.purple};
    }
  }
`;

export const Profile = styled.div`
  p {
    display: none;
  }
  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 12px;
    p {
      cursor: pointer;
      display: block;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

export const Avatar = styled.figure`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Skeleton = styled.div`
  min-width: 32px;
  min-height: 32px;
  border-radius: 32px;
  background-color: ${theme.colors.border};
`;

export const Search = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: block;
    position: relative;
    width: 100%;
    input {
      width: 100%;
      display: flex;
      height: 40px;
      padding: 6px 32px 6px 16px;
      justify-content: space-between;
      align-items: center;
      flex: 1 0 0;
      border-radius: 8px;
      border: 1px solid #e0e0e0;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }
`;

export const Button = styled.button`
  display: none;
  @media (min-width: 1280px) {
    display: block;
    position: absolute;
    background: none;
    border: none;
    cursor: pointer;
    top: 9px;
    right: 8px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Filter = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    gap: 12px;
    align-items: center;
    cursor: pointer;
    p {
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

export const Separation = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: block;
    width: 1px;
    height: 40px;
    background-color: ${theme.colors.border};
  }
`;
