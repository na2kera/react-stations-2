import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CreateThread from "./CreateThread";
import Thread from "./Thread";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/threads/new" element={<CreateThread />} />
        <Route path="/thread/:thread-id" element={<Thread />} />
      </Routes>
    </>
  );
}

export default App;
