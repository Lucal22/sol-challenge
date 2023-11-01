import { fireEvent, render, screen } from "@testing-library/react";
import CategoryFilter from ".";
import { renderTheme } from "../../utils/renderTheme";

describe("<CategoryFilter />", () => {
  it("should render <CategoryFilter />", () => {
    const categoryFilter = renderTheme(<CategoryFilter />);
    expect(categoryFilter).toMatchSnapshot;
  });
  it("should be able to click", () => {
    render(<CategoryFilter />);
    const categoryButton = screen.getByTestId("ROMANCE");
    fireEvent.click(categoryButton);
  });
});
