import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Thankyou from "./pages/Thankyou";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thankyou" element={<Thankyou />} />
    </Routes>
  );
}

export default App;
