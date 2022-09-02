import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
