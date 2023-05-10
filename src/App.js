import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { Counter } from "./components/Counter";
import { Resume } from "./components/Resume";

function App() {
  return (
    <div>
      <div>
        <nav>
          <Link to="/" end>
            Resume
          </Link>
          <Link to="/counter">Counter</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
