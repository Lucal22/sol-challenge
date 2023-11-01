import BooksLibrary from ".";
import { renderTheme } from "../../utils/renderTheme";

describe("<BooksLibrary />", () => {
  it("should render <BooksLibrary />", () => {
    const booksLibrary = renderTheme(<BooksLibrary />);
    expect(booksLibrary).toMatchSnapshot;
  });
});
