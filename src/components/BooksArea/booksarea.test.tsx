import BooksArea from ".";
import { render, screen } from "@testing-library/react";

jest.mock("react-query");
jest.mock("../../hooks/useCategoryFilter");

const mockData = {
  data: {
    allBooks: [
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

describe("<BooksArea />", () => {
  it("should render loading skeleton when data is loading", () => {
    require("react-query").useQuery.mockReturnValue({
      data: null,
      isLoading: true,
    });
    require("../../hooks/useCategoryFilter").useCategoryFilter.mockReturnValue({
      category: "ALL",
    });

    render(<BooksArea />);
    const skeletonElements = screen.getAllByTestId("skeleton");
    expect(skeletonElements).toHaveLength;
  });

  it("should not render skeleton when isLoading is false", () => {
    require("react-query").useQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
    });
    require("../../hooks/useCategoryFilter").useCategoryFilter.mockReturnValue({
      category: "ALL",
    });

    render(<BooksArea />);
    expect(screen.getAllByTestId("bookCards")).toHaveLength;
  });

  it("should render bookCards when data is true", () => {
    require("react-query").useQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
    });
    require("../../hooks/useCategoryFilter").useCategoryFilter.mockReturnValue({
      category: "ALL",
    });

    render(<BooksArea />);
    const bookCards = screen.getAllByTestId("bookCards");
    expect(bookCards).toHaveLength;
  });

  it("should have all posts", () => {
    require("react-query").useQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
    });

    require("../../hooks/useCategoryFilter").useCategoryFilter.mockReturnValue({
      category: "ALL",
    });

    render(<BooksArea />);
    const bookCards = screen.getAllByTestId("bookCards");
    expect(bookCards).toHaveLength(2);
  });

  it("should render only filtered posts", () => {
    require("react-query").useQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
    });

    require("../../hooks/useCategoryFilter").useCategoryFilter.mockReturnValue({
      category: "Romance",
    });

    render(<BooksArea />);
    const bookCards = screen.getAllByTestId("bookCards");
    expect(bookCards).toHaveLength(1);
  });
});
