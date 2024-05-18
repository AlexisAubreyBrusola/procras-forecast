import Homepage from "./pages/Homepage";
import Weatherpage from "./pages/Weatherpage";
import ErrorPage404 from "./pages/error-pages/ErrorPage404";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/weather/:city" element={<Weatherpage />} />

          <Route path="*" element={<ErrorPage404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
