import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
