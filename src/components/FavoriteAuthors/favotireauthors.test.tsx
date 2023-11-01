import { render, screen } from "@testing-library/react";
import FavoriteAuthors from ".";
import { renderTheme } from "../../utils/renderTheme";

jest.mock("react-query");
jest.mock("../../hooks/useFavoriteAuthors");

const mockData = {
  data: {
    favoriteAuthors: [
      {
        author: {
          id: 1,
          name: "Author 1",
          picture: "picture.jpg",
          booksCount: 3,
        },
      },
      {
        author: {
          id: 2,
          name: "Author 2",
          picture: "picture.jpg",
          booksCount: 2,
        },
      },
    ],
  },
};

describe("<FavoriteAuthors />", () => {
  it("should render <FavoriteAuthors />", () => {
    const favoriteAuthors = renderTheme(<FavoriteAuthors />);
    expect(favoriteAuthors).toMatchSnapshot;
  });

  it("should render loading skeleton when data is loading", () => {
    require("react-query").useQuery.mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(<FavoriteAuthors />);
    const skeletonElements = screen.getAllByTestId("skeleton");
    expect(skeletonElements).toHaveLength;
  });

  it("should render bookCards when data is true", () => {
    require("react-query").useQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
    });

    render(<FavoriteAuthors />);
    const authorCards = screen.getAllByTestId("authorsCard");
    expect(authorCards).toHaveLength;
  });
});
