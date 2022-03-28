import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InitialRoute from "../pages";
import Login  from "../pages/Login";

export function DeslogadoRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<InitialRoute />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
