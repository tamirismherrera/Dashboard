import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InitialRoute from "../pages";
import  Home  from "../pages/Home";

export function LogadoRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<InitialRoute />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
