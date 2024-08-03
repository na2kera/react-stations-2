import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CreateThread from "./CreateThread";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/threads/new" element={<CreateThread />} />
      </Routes>
    </>
  );
}

export default App;
