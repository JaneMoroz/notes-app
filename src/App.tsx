import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
