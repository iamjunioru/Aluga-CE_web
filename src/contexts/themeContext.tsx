import { createContext, useCallback, ReactNode, useContext } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import darkTheme from "../styles/themes/darkTheme";
import lightTheme from "../styles/themes/lightTheme";
import usePersistedState from "../hooks/usePersistedState"

interface ThemeContextData {
  toggleTheme: () => void;
  theme: DefaultTheme;
}

interface MainProps {
  children: ReactNode | ReactNode[];
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
export const CustomThemeProvider = ({ children }: MainProps) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", lightTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "dark" ? lightTheme : darkTheme);
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme  }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
