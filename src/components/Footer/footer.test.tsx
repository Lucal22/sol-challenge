import { renderTheme } from "../../utils/renderTheme";
import Footer from ".";

describe("<Footer />", () => {
  it("should render <Footer />", () => {
    const footer = renderTheme(<Footer />);
    expect(footer).toMatchSnapshot;
  });
});
