import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./global-styles";

type MyThemeProviderType = {
  children: React.ReactNode;
};

export function MyThemeProvider({ children }: MyThemeProviderType) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
}
