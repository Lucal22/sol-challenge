import { renderTheme } from "../../utils/renderTheme";
import Filters from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<Filters />", () => {
  it("should render <Filters />", () => {
    const filters = renderTheme(<Filters />);
    expect(filters).toMatchSnapshot;
  });

  it("should fire the myBooksButton", () => {
    render(<Filters />);
    const myBooksButton = screen.getByTestId("myBooksButton");
    fireEvent.click(myBooksButton);
  });

  it("should fire the rentButton", () => {
    render(<Filters />);
    const rentButton = screen.getByTestId("rentButton");
    fireEvent.click(rentButton);
  });
});
