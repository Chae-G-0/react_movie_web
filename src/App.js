import { Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import './common.scss'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/movie/:id" element={<Detail/> } />
    </Routes>
  );
}

export default App;
