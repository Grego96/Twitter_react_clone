import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Tweets from "./pages/Tweets"
// import AboutOurTwitter from "./pages/AboutOurTwitter";


export const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets/:id" element={<Tweets />} />
        {/* <Route path="*" element={<Error404 />} />         */}
      </Routes>
  );
};
