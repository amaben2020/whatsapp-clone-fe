import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import * as View from "./Views";

function App() {
  return (
    <div className="p-10">
      <Router>
        <Routes>
          <Route path="/" element={<View.Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
