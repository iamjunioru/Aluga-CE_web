import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}
:root {
  --background: ${(props) => props.theme.colors.background};
}

html {
  background: var(--background);
  scroll-behavior: smooth;
}

button {
  cursor: pointer;
  /* color: var(--text); */
}
`;