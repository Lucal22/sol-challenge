import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
body {
    background-color: ${theme.background.gray};
    font-family: ${theme.font.roboto};
    color: ${theme.colors.title};
}

a {
  color: inherit;
  text-decoration: none;
}
`;
