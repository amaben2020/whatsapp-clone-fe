import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import PageLayout from "./Layout/PageLayout";
import * as View from "./Views";

function App() {
  return (
    <PageLayout>
      <Router>
        <Routes>
          <Route path="/" element={<View.Home />} />
          <Route path="/register" element={<View.Register />} />
          <Route path="/login" element={<View.Login />} />
        </Routes>
      </Router>
    </PageLayout>
  );
}

export default App;
