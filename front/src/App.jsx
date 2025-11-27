import Login from "../pages/Login";
import Salve from "../pages/Salve";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/salve" element={<Salve />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
