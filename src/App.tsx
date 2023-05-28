import { CustomThemeProvider } from "./contexts/themeContext";
import { AuthProvider } from "./contexts/authContext";
import Pages from "./pages";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <CustomThemeProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <GlobalStyles />
        <Pages />
      </CustomThemeProvider>
    </AuthProvider>
  );
}

export default App;
