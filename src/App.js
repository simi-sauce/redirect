import "./App.css";
import Download from "./component/Download";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/download">
      <Routes>
        <Route path="/" element={<Download />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
