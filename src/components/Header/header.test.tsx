import { renderTheme } from "../../utils/renderTheme";
import Header from ".";
import { render, screen } from "@testing-library/react";

jest.mock("react-query");
jest.mock("../../hooks/usePicture");

const mockData = {
  data: {
    userPicture: "picture.jpg",
  },
};

describe("<Header />", () => {
  it("should render <Footer />", () => {
    const header = renderTheme(<Header />);
    expect(header).toMatchSnapshot;
  });

  it("should render loading skeleton when data is loading", () => {
    require("react-query").useQuery.mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(<Header />);
    const skeletonElements = screen.getByTestId("skeleton");
    expect(skeletonElements).toHaveLength;
  });

  it("should render bookCards when data is true", () => {
    require("react-query").useQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
    });

    render(<Header />);
    const userProfile = screen.getAllByTestId("userProfile");
    expect(userProfile).toHaveLength;
  });
});
