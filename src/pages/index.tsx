import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";
import PropertyInfo from "./PropertyInfo";

function Pages() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<PropertyInfo />} />
    </Routes>
  );
}

export default Pages;
