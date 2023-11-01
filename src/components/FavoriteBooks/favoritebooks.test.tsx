import { render, screen } from "@testing-library/react";
import FavoriteBooks from ".";
import { renderTheme } from "../../utils/renderTheme";

jest.mock("react-query");
jest.mock("../../hooks/useFavoriteAuthors");

const mockData = {
  data: {
    favoriteBooks: [
      {
        id: 1,
        name: "Book 1",
        author: { name: "Author 1" },
        cover: "cover1.jpg",
        category: "Romance",
      },
      {
        id: 2,
        name: "Book 2",
        author: { name: "Author 2" },
        cover: "cover2.jpg",
        category: "Comedy",
      },
    ],
  },
};

describe("<FavoriteBooks />", () => {
  it("should render <FavoriteAuthors />", () => {
    const favoriteBooks = renderTheme(<FavoriteBooks />);
    expect(favoriteBooks).toMatchSnapshot;
  });

  it("should render loading skeleton when data is loading", () => {
    require("react-query").useQuery.mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(<FavoriteBooks />);
    const skeletonElements = screen.getAllByTestId("skeleton");
    expect(skeletonElements).toHaveLength;
  });

  it("should render bookCards when data is true", () => {
    require("react-query").useQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
    });

    render(<FavoriteBooks />);
    const authorCards = screen.getAllByTestId("favoriteBooksCard");
    expect(authorCards).toHaveLength;
  });
});
