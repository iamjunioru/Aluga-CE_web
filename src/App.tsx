import { CustomThemeProvider } from "./contexts/themeContext";
import Pages from "./pages";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <Pages />
    </CustomThemeProvider>
  );
}

export default App;
