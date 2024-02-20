import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Views";

function App() {
  return (
    <div className="p-10">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
