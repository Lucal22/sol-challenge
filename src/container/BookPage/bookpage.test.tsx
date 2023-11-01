import { renderTheme } from "../../utils/renderTheme";
import BookPage from ".";
import { render, screen } from "@testing-library/react";

jest.mock("react-query");
jest.mock("../../hooks/useBook");

const mockData = {
  data: {
    book: {
      id: "1",
      name: "Book 1",
      author: { name: "Author 1" },
      cover: "cover1.jpg",
      description: "This is a description",
      category: "Romance",
    },
  },
  isLoading: false,
};

describe("<BookPage />", () => {
  it("should render <Footer />", () => {
    const bookPage = renderTheme(<BookPage />);
    expect(bookPage).toMatchSnapshot;
  });

  it("should render book when data is true", () => {
    require("react-query").useQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
    });

    render(<BookPage />);
    const bookPage = screen.getAllByTestId("description");
    expect(bookPage).toHaveLength;
  });
});
