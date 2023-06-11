import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Thankyou from "./pages/Thankyou";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thankyou" element={<Thankyou />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
