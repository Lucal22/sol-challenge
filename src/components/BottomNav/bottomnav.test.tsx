import BottomNav from ".";
import { renderTheme } from "../../utils/renderTheme";

describe("<BottomNav />", () => {
  it("should render <BottomNav />", () => {
    const bottomNav = renderTheme(<BottomNav />);
    expect(bottomNav).toMatchSnapshot;
  });
});
