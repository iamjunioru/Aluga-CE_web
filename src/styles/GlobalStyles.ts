import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}
:root {
  /* colors */
  --background: ${(props) => props.theme.colors.background};
  --background-secondary: ${(props) => props.theme.colors.backgroundSecondary};
  --text: ${(props) => props.theme.colors.text};
  --primary: ${(props) => props.theme.colors.primary};
  --secondary: ${(props) => props.theme.colors.secondary};
  --red: #e52e4d;
  --gray: #333333;
  --gray-light: #828282;
  --white: #ffffff;
  --black: #000000;
  --star-rating: #f2c94c;

  /* font-size */
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.5rem;
  --font-size-xl: 2rem;

  /* button */
  --input-button-height: 3rem;
  --button-border-radius: 0.25rem;
  --button-disabled-opacity: 0.5;
  --button-disabled-cursor: not-allowed;
  --button-disabled-background: #e1e1e6;
  --button-disabled-color: #29292e;

  /* input */
  --input-placeholder-color: #8d8d99;
  --input-background: #e1e1e6;
  --input-color: #29292e;

  /* spacing */
  --page-max-width: 1200px;
  --header-height: 90px;
  --padding-page: clamp(1rem, 5vw, 3.5rem);

  /* border-radius */
  --border-radius: 0.5rem;
  --border-radius-sm: 0.25rem;

  /* box-shadow */
  --box-shadow: 0 60px 40px -30px rgba(0, 0, 0, 0.27);
  --box-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

html {
  background: var(--background);
  scroll-behavior: smooth;
}

body {
  color: var(--text);
  width: 100%;
}

h1 {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 500;
}

input {
  width: 100%;
  max-width: 400px;
  height: var(--input-button-height);
  margin-top: 1rem;
  border-radius: var(--border-radius);
  border: 0;
  background: var(--input-background);
  color: var(--input-color);
  font-size: 1rem;
  font-weight: 500;
  padding: 0 1rem;
  &::placeholder {
    color: var(--input-placeholder-color);
  }

  &:disabled {
    background: var(--input-background);
    color: var(--input-color);
    cursor: var(--button-disabled-cursor);
    opacity: var(--button-disabled-opacity);
  }
}

button {
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    background: var(--button-disabled-background);
    color: var(--button-disabled-color);
    cursor: var(--button-disabled-cursor);
    opacity: var(--button-disabled-opacity);
  }
}

span#span-error-message {
  color: var(--red);
  font-size: var(--font-size-sm);
  font-weight: 500;
  margin-top: 0.2rem;
}
`;
